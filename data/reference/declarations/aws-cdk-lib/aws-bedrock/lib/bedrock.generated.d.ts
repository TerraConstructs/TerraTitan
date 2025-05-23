import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies an agent as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - AgentName – Specify a name for the agent.
 * - AgentResourceRoleArn – Specify the Amazon Resource Name (ARN) of the service role with permissions to invoke API operations on the agent. For more information, see [Create a service role for Agents for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-permissions.html) .
 * - FoundationModel – Specify the model ID of a foundation model to use when invoking the agent. For more information, see [Supported regions and models for Agents for Amazon Bedrock](https://docs.aws.amazon.com//bedrock/latest/userguide/agents-supported.html) .
 *
 * For more information about using agents in Amazon Bedrock , see [Agents for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::Agent
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html
 */
export declare class CfnAgent extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgent from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgent;
    /**
     * The Amazon Resource Name (ARN) of the agent.
     *
     * @cloudformationAttribute AgentArn
     */
    readonly attrAgentArn: string;
    /**
     * The unique identifier of the agent.
     *
     * @cloudformationAttribute AgentId
     */
    readonly attrAgentId: string;
    /**
     * The status of the agent and whether it is ready for use. The following statuses are possible:
     *
     * - CREATING – The agent is being created.
     * - PREPARING – The agent is being prepared.
     * - PREPARED – The agent is prepared and ready to be invoked.
     * - NOT_PREPARED – The agent has been created but not yet prepared.
     * - FAILED – The agent API operation failed.
     * - UPDATING – The agent is being updated.
     * - DELETING – The agent is being deleted.
     *
     * @cloudformationAttribute AgentStatus
     */
    readonly attrAgentStatus: string;
    /**
     * The version of the agent.
     *
     * @cloudformationAttribute AgentVersion
     */
    readonly attrAgentVersion: string;
    /**
     * The time at which the agent was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Contains reasons that the agent-related API that you invoked failed.
     *
     * @cloudformationAttribute FailureReasons
     */
    readonly attrFailureReasons: Array<string>;
    /**
     * The time at which the agent was last prepared.
     *
     * @cloudformationAttribute PreparedAt
     */
    readonly attrPreparedAt: string;
    /**
     * Contains recommended actions to take for the agent-related API that you invoked to succeed.
     *
     * @cloudformationAttribute RecommendedActions
     */
    readonly attrRecommendedActions: Array<string>;
    /**
     * The time at which the agent was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The action groups that belong to an agent.
     */
    actionGroups?: Array<CfnAgent.AgentActionGroupProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The agent's collaboration settings.
     */
    agentCollaboration?: string;
    /**
     * List of Agent Collaborators.
     */
    agentCollaborators?: Array<CfnAgent.AgentCollaboratorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the agent.
     */
    agentName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     */
    agentResourceRoleArn?: string;
    /**
     * Specifies whether to automatically update the `DRAFT` version of the agent after making changes to the agent.
     */
    autoPrepare?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the agent.
     */
    customerEncryptionKeyArn?: string;
    /**
     * Contains custom orchestration configurations for the agent.
     */
    customOrchestration?: CfnAgent.CustomOrchestrationProperty | cdk.IResolvable;
    /**
     * The description of the agent.
     */
    description?: string;
    /**
     * The foundation model used for orchestration by the agent.
     */
    foundationModel?: string;
    /**
     * Details about the guardrail associated with the agent.
     */
    guardrailConfiguration?: CfnAgent.GuardrailConfigurationProperty | cdk.IResolvable;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
     */
    idleSessionTtlInSeconds?: number;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     */
    instruction?: string;
    /**
     * The knowledge bases associated with the agent.
     */
    knowledgeBases?: Array<CfnAgent.AgentKnowledgeBaseProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Contains memory configuration for the agent.
     */
    memoryConfiguration?: cdk.IResolvable | CfnAgent.MemoryConfigurationProperty;
    /**
     * Specifies the orchestration strategy for the agent.
     */
    orchestrationType?: string;
    /**
     * Contains configurations to override prompt templates in different parts of an agent sequence.
     */
    promptOverrideConfiguration?: cdk.IResolvable | CfnAgent.PromptOverrideConfigurationProperty;
    /**
     * Specifies whether to delete the resource even if it's in use.
     */
    skipResourceInUseCheckOnDelete?: boolean | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    testAliasTags?: cdk.IResolvable | Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAgentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAgent {
    /**
     * Contains details of the inline agent's action group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html
     */
    interface AgentActionGroupProperty {
        /**
         * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-actiongroupexecutor
         */
        readonly actionGroupExecutor?: CfnAgent.ActionGroupExecutorProperty | cdk.IResolvable;
        /**
         * The name of the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-actiongroupname
         */
        readonly actionGroupName: string;
        /**
         * Specifies whether the action group is available for the agent to invoke or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-actiongroupstate
         */
        readonly actionGroupState?: string;
        /**
         * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema.
         *
         * For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com//bedrock/latest/userguide/agents-api-schema.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-apischema
         */
        readonly apiSchema?: CfnAgent.APISchemaProperty | cdk.IResolvable;
        /**
         * A description of the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-description
         */
        readonly description?: string;
        /**
         * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-functionschema
         */
        readonly functionSchema?: CfnAgent.FunctionSchemaProperty | cdk.IResolvable;
        /**
         * If this field is set as `AMAZON.UserInput` , the agent can request the user for additional information when trying to complete a task. The `description` , `apiSchema` , and `actionGroupExecutor` fields must be blank for this action group.
         *
         * During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an [Observation](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html) reprompting the user for more information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-parentactiongroupsignature
         */
        readonly parentActionGroupSignature?: string;
        /**
         * Specifies whether to delete the resource even if it's in use.
         *
         * By default, this value is `false` .
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html#cfn-bedrock-agent-agentactiongroup-skipresourceinusecheckondelete
         */
        readonly skipResourceInUseCheckOnDelete?: boolean | cdk.IResolvable;
    }
    /**
     * Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html
     */
    interface ActionGroupExecutorProperty {
        /**
         * To return the action group invocation results directly in the `InvokeInlineAgent` response, specify `RETURN_CONTROL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html#cfn-bedrock-agent-actiongroupexecutor-customcontrol
         */
        readonly customControl?: string;
        /**
         * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html#cfn-bedrock-agent-actiongroupexecutor-lambda
         */
        readonly lambda?: string;
    }
    /**
     * Contains details about the OpenAPI schema for the action group.
     *
     * For more information, see [Action group OpenAPI schemas](https://docs.aws.amazon.com//bedrock/latest/userguide/agents-api-schema.html) . You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the s3 field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html
     */
    interface APISchemaProperty {
        /**
         * The JSON or YAML-formatted payload defining the OpenAPI schema for the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html#cfn-bedrock-agent-apischema-payload
         */
        readonly payload?: string;
        /**
         * Contains details about the S3 object containing the OpenAPI schema for the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html#cfn-bedrock-agent-apischema-s3
         */
        readonly s3?: cdk.IResolvable | CfnAgent.S3IdentifierProperty;
    }
    /**
     * The identifier information for an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html
     */
    interface S3IdentifierProperty {
        /**
         * The name of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html#cfn-bedrock-agent-s3identifier-s3bucketname
         */
        readonly s3BucketName?: string;
        /**
         * The S3 object key for the S3 resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html#cfn-bedrock-agent-s3identifier-s3objectkey
         */
        readonly s3ObjectKey?: string;
    }
    /**
     * Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-functionschema.html
     */
    interface FunctionSchemaProperty {
        /**
         * A list of functions that each define an action in the action group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-functionschema.html#cfn-bedrock-agent-functionschema-functions
         */
        readonly functions: Array<CfnAgent.FunctionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Defines parameters that the agent needs to invoke from the user to complete the function.
     *
     * Corresponds to an action in an action group.
     *
     * This data type is used in the following API operations:
     *
     * - [CreateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_RequestSyntax)
     * - [CreateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_CreateAgentActionGroup.html#API_agent_CreateAgentActionGroup_ResponseSyntax)
     * - [UpdateAgentActionGroup request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_RequestSyntax)
     * - [UpdateAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_UpdateAgentActionGroup.html#API_agent_UpdateAgentActionGroup_ResponseSyntax)
     * - [GetAgentActionGroup response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetAgentActionGroup.html#API_agent_GetAgentActionGroup_ResponseSyntax)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html
     */
    interface FunctionProperty {
        /**
         * A description of the function and its purpose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-description
         */
        readonly description?: string;
        /**
         * A name for the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-name
         */
        readonly name: string;
        /**
         * The parameters that the agent elicits from the user to fulfill the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnAgent.ParameterDetailProperty>;
        /**
         * Contains information if user confirmation is required to invoke the function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html#cfn-bedrock-agent-function-requireconfirmation
         */
        readonly requireConfirmation?: string;
    }
    /**
     * Contains details about a parameter in a function for an action group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html
     */
    interface ParameterDetailProperty {
        /**
         * A description of the parameter.
         *
         * Helps the foundation model determine how to elicit the parameters from the user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html#cfn-bedrock-agent-parameterdetail-description
         */
        readonly description?: string;
        /**
         * Whether the parameter is required for the agent to complete the function for action group invocation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html#cfn-bedrock-agent-parameterdetail-required
         */
        readonly required?: boolean | cdk.IResolvable;
        /**
         * The data type of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html#cfn-bedrock-agent-parameterdetail-type
         */
        readonly type: string;
    }
    /**
     * Details of custom orchestration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-customorchestration.html
     */
    interface CustomOrchestrationProperty {
        /**
         * The structure of the executor invoking the actions in custom orchestration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-customorchestration.html#cfn-bedrock-agent-customorchestration-executor
         */
        readonly executor?: cdk.IResolvable | CfnAgent.OrchestrationExecutorProperty;
    }
    /**
     * Contains details about the Lambda function containing the orchestration logic carried out upon invoking the custom orchestration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-orchestrationexecutor.html
     */
    interface OrchestrationExecutorProperty {
        /**
         * The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-orchestrationexecutor.html#cfn-bedrock-agent-orchestrationexecutor-lambda
         */
        readonly lambda: string;
    }
    /**
     * Configuration information for a guardrail that you use with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html
     */
    interface GuardrailConfigurationProperty {
        /**
         * The identifier for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html#cfn-bedrock-agent-guardrailconfiguration-guardrailidentifier
         */
        readonly guardrailIdentifier?: string;
        /**
         * The version of the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html#cfn-bedrock-agent-guardrailconfiguration-guardrailversion
         */
        readonly guardrailVersion?: string;
    }
    /**
     * Details of the memory configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-memoryconfiguration.html
     */
    interface MemoryConfigurationProperty {
        /**
         * The type of memory that is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-memoryconfiguration.html#cfn-bedrock-agent-memoryconfiguration-enabledmemorytypes
         */
        readonly enabledMemoryTypes?: Array<string>;
        /**
         * Contains the configuration for SESSION_SUMMARY memory type enabled for the agent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-memoryconfiguration.html#cfn-bedrock-agent-memoryconfiguration-sessionsummaryconfiguration
         */
        readonly sessionSummaryConfiguration?: cdk.IResolvable | CfnAgent.SessionSummaryConfigurationProperty;
        /**
         * The number of days the agent is configured to retain the conversational context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-memoryconfiguration.html#cfn-bedrock-agent-memoryconfiguration-storagedays
         */
        readonly storageDays?: number;
    }
    /**
     * Configuration for SESSION_SUMMARY memory type enabled for the agent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-sessionsummaryconfiguration.html
     */
    interface SessionSummaryConfigurationProperty {
        /**
         * Maximum number of recent session summaries to include in the agent's prompt context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-sessionsummaryconfiguration.html#cfn-bedrock-agent-sessionsummaryconfiguration-maxrecentsessions
         */
        readonly maxRecentSessions?: number;
    }
    /**
     * Contains details about a knowledge base that is associated with an agent.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html
     */
    interface AgentKnowledgeBaseProperty {
        /**
         * The description of the association between the agent and the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html#cfn-bedrock-agent-agentknowledgebase-description
         */
        readonly description: string;
        /**
         * The unique identifier of the association between the agent and the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html#cfn-bedrock-agent-agentknowledgebase-knowledgebaseid
         */
        readonly knowledgeBaseId: string;
        /**
         * Specifies whether to use the knowledge base or not when sending an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html#cfn-bedrock-agent-agentknowledgebase-knowledgebasestate
         */
        readonly knowledgeBaseState?: string;
    }
    /**
     * An agent collaborator.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaborator.html
     */
    interface AgentCollaboratorProperty {
        /**
         * The collaborator's agent descriptor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaborator.html#cfn-bedrock-agent-agentcollaborator-agentdescriptor
         */
        readonly agentDescriptor: CfnAgent.AgentDescriptorProperty | cdk.IResolvable;
        /**
         * The collaborator's instructions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaborator.html#cfn-bedrock-agent-agentcollaborator-collaborationinstruction
         */
        readonly collaborationInstruction: string;
        /**
         * The collaborator's collaborator name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaborator.html#cfn-bedrock-agent-agentcollaborator-collaboratorname
         */
        readonly collaboratorName: string;
        /**
         * The collaborator's relay conversation history.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaborator.html#cfn-bedrock-agent-agentcollaborator-relayconversationhistory
         */
        readonly relayConversationHistory?: string;
    }
    /**
     * An agent descriptor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentdescriptor.html
     */
    interface AgentDescriptorProperty {
        /**
         * The agent's alias ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentdescriptor.html#cfn-bedrock-agent-agentdescriptor-aliasarn
         */
        readonly aliasArn?: string;
    }
    /**
     * Contains configurations to override prompts in different parts of an agent sequence.
     *
     * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html
     */
    interface PromptOverrideConfigurationProperty {
        /**
         * The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.
         *
         * If you specify this field, at least one of the `promptConfigurations` must contain a `parserMode` value that is set to `OVERRIDDEN` . For more information, see [Parser Lambda function in Amazon Bedrock Agents](https://docs.aws.amazon.com/bedrock/latest/userguide/lambda-parser.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html#cfn-bedrock-agent-promptoverrideconfiguration-overridelambda
         */
        readonly overrideLambda?: string;
        /**
         * Contains configurations to override a prompt template in one part of an agent sequence.
         *
         * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html#cfn-bedrock-agent-promptoverrideconfiguration-promptconfigurations
         */
        readonly promptConfigurations: Array<cdk.IResolvable | CfnAgent.PromptConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * Contains configurations to override a prompt template in one part of an agent sequence.
     *
     * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html
     */
    interface PromptConfigurationProperty {
        /**
         * Defines the prompt template with which to replace the default prompt template.
         *
         * You can use placeholder variables in the base prompt template to customize the prompt. For more information, see [Prompt template placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) . For more information, see [Configure the prompt templates](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts-configure.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-baseprompttemplate
         */
        readonly basePromptTemplate?: string;
        /**
         * The agent's foundation model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-foundationmodel
         */
        readonly foundationModel?: string;
        /**
         * Contains inference parameters to use when the agent invokes a foundation model in the part of the agent sequence defined by the `promptType` .
         *
         * For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-inferenceconfiguration
         */
        readonly inferenceConfiguration?: CfnAgent.InferenceConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the `promptType` .
         *
         * If you set the field as `OVERRIDDEN` , the `overrideLambda` field in the [PromptOverrideConfiguration](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html) must be specified with the ARN of a Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-parsermode
         */
        readonly parserMode?: string;
        /**
         * Specifies whether to override the default prompt template for this `promptType` .
         *
         * Set this value to `OVERRIDDEN` to use the prompt that you provide in the `basePromptTemplate` . If you leave it as `DEFAULT` , the agent uses a default prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-promptcreationmode
         */
        readonly promptCreationMode?: string;
        /**
         * Specifies whether to allow the inline agent to carry out the step specified in the `promptType` .
         *
         * If you set this value to `DISABLED` , the agent skips that step. The default state for each `promptType` is as follows.
         *
         * - `PRE_PROCESSING` – `ENABLED`
         * - `ORCHESTRATION` – `ENABLED`
         * - `KNOWLEDGE_BASE_RESPONSE_GENERATION` – `ENABLED`
         * - `POST_PROCESSING` – `DISABLED`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-promptstate
         */
        readonly promptState?: string;
        /**
         * The step in the agent sequence that this prompt configuration applies to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html#cfn-bedrock-agent-promptconfiguration-prompttype
         */
        readonly promptType?: string;
    }
    /**
     * Base inference parameters to pass to a model in a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) . For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
     *
     * If you need to pass additional parameters that the model supports, use the `additionalModelRequestFields` request field in the call to `Converse` or `ConverseStream` . For more information, see [Model parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html
     */
    interface InferenceConfigurationProperty {
        /**
         * The maximum number of tokens allowed in the generated response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-maximumlength
         */
        readonly maximumLength?: number;
        /**
         * A list of stop sequences.
         *
         * A stop sequence is a sequence of characters that causes the model to stop generating the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-stopsequences
         */
        readonly stopSequences?: Array<string>;
        /**
         * The likelihood of the model selecting higher-probability options while generating a response.
         *
         * A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
         *
         * The default value is the default value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-temperature
         */
        readonly temperature?: number;
        /**
         * While generating a response, the model determines the probability of the following token at each point of generation.
         *
         * The value that you set for `topK` is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set `topK` to 50, the model selects the next token from among the top 50 most likely choices.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-topk
         */
        readonly topK?: number;
        /**
         * The percentage of most-likely candidates that the model considers for the next token.
         *
         * For example, if you choose a value of 0.8 for `topP` , the model selects from the top 80% of the probability distribution of tokens that could be next in the sequence.
         *
         * The default value is the default value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html#cfn-bedrock-agent-inferenceconfiguration-topp
         */
        readonly topP?: number;
    }
}
/**
 * Properties for defining a `CfnAgent`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html
 */
export interface CfnAgentProps {
    /**
     * The action groups that belong to an agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-actiongroups
     */
    readonly actionGroups?: Array<CfnAgent.AgentActionGroupProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The agent's collaboration settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-agentcollaboration
     */
    readonly agentCollaboration?: string;
    /**
     * List of Agent Collaborators.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-agentcollaborators
     */
    readonly agentCollaborators?: Array<CfnAgent.AgentCollaboratorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-agentname
     */
    readonly agentName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-agentresourcerolearn
     */
    readonly agentResourceRoleArn?: string;
    /**
     * Specifies whether to automatically update the `DRAFT` version of the agent after making changes to the agent.
     *
     * The `DRAFT` version can be continually iterated upon during internal development. By default, this value is `false` .
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-autoprepare
     */
    readonly autoPrepare?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-customerencryptionkeyarn
     */
    readonly customerEncryptionKeyArn?: string;
    /**
     * Contains custom orchestration configurations for the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-customorchestration
     */
    readonly customOrchestration?: CfnAgent.CustomOrchestrationProperty | cdk.IResolvable;
    /**
     * The description of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-description
     */
    readonly description?: string;
    /**
     * The foundation model used for orchestration by the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-foundationmodel
     */
    readonly foundationModel?: string;
    /**
     * Details about the guardrail associated with the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-guardrailconfiguration
     */
    readonly guardrailConfiguration?: CfnAgent.GuardrailConfigurationProperty | cdk.IResolvable;
    /**
     * The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.
     *
     * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-idlesessionttlinseconds
     */
    readonly idleSessionTtlInSeconds?: number;
    /**
     * Instructions that tell the agent what it should do and how it should interact with users.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-instruction
     */
    readonly instruction?: string;
    /**
     * The knowledge bases associated with the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-knowledgebases
     */
    readonly knowledgeBases?: Array<CfnAgent.AgentKnowledgeBaseProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Contains memory configuration for the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-memoryconfiguration
     */
    readonly memoryConfiguration?: cdk.IResolvable | CfnAgent.MemoryConfigurationProperty;
    /**
     * Specifies the orchestration strategy for the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-orchestrationtype
     */
    readonly orchestrationType?: string;
    /**
     * Contains configurations to override prompt templates in different parts of an agent sequence.
     *
     * For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-promptoverrideconfiguration
     */
    readonly promptOverrideConfiguration?: cdk.IResolvable | CfnAgent.PromptOverrideConfigurationProperty;
    /**
     * Specifies whether to delete the resource even if it's in use.
     *
     * By default, this value is `false` .
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-skipresourceinusecheckondelete
     */
    readonly skipResourceInUseCheckOnDelete?: boolean | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#cfn-bedrock-agent-testaliastags
     */
    readonly testAliasTags?: cdk.IResolvable | Record<string, string>;
}
/**
 * Specifies an agent alias as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - AgentAliasName – Specify a name for the alias.
 *
 * For more information about creating aliases for an agent in Amazon Bedrock , see [Deploy an Amazon Bedrock agent](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-deploy.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::AgentAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html
 */
export declare class CfnAgentAlias extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAgentAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAgentAlias;
    /**
     * The Amazon Resource Name (ARN) of the alias of the agent.
     *
     * @cloudformationAttribute AgentAliasArn
     */
    readonly attrAgentAliasArn: string;
    /**
     * Contains details about the history of the alias.
     *
     * @cloudformationAttribute AgentAliasHistoryEvents
     */
    readonly attrAgentAliasHistoryEvents: cdk.IResolvable;
    /**
     * The unique identifier of the alias of the agent.
     *
     * @cloudformationAttribute AgentAliasId
     */
    readonly attrAgentAliasId: string;
    /**
     * The status of the alias of the agent and whether it is ready for use. The following statuses are possible:
     *
     * - CREATING – The agent alias is being created.
     * - PREPARED – The agent alias is finished being created or updated and is ready to be invoked.
     * - FAILED – The agent alias API operation failed.
     * - UPDATING – The agent alias is being updated.
     * - DELETING – The agent alias is being deleted.
     * - DISSOCIATED - The agent alias has no version associated with it.
     *
     * @cloudformationAttribute AgentAliasStatus
     */
    readonly attrAgentAliasStatus: string;
    /**
     * The time at which the alias of the agent was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The time at which the alias was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The name of the alias of the agent.
     */
    agentAliasName: string;
    /**
     * The unique identifier of the agent.
     */
    agentId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the alias of the agent.
     */
    description?: string;
    /**
     * Contains details about the routing configuration of the alias.
     */
    routingConfiguration?: Array<CfnAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAgentAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAgentAlias {
    /**
     * Contains details about the routing configuration of the alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliasroutingconfigurationlistitem.html
     */
    interface AgentAliasRoutingConfigurationListItemProperty {
        /**
         * The version of the agent with which the alias is associated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliasroutingconfigurationlistitem.html#cfn-bedrock-agentalias-agentaliasroutingconfigurationlistitem-agentversion
         */
        readonly agentVersion: string;
    }
    /**
     * Contains details about the history of the alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html
     */
    interface AgentAliasHistoryEventProperty {
        /**
         * The date that the alias stopped being associated to the version in the `routingConfiguration` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html#cfn-bedrock-agentalias-agentaliashistoryevent-enddate
         */
        readonly endDate?: string;
        /**
         * Contains details about the version of the agent with which the alias is associated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html#cfn-bedrock-agentalias-agentaliashistoryevent-routingconfiguration
         */
        readonly routingConfiguration?: Array<CfnAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The date that the alias began being associated to the version in the `routingConfiguration` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html#cfn-bedrock-agentalias-agentaliashistoryevent-startdate
         */
        readonly startDate?: string;
    }
}
/**
 * Properties for defining a `CfnAgentAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html
 */
export interface CfnAgentAliasProps {
    /**
     * The name of the alias of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentaliasname
     */
    readonly agentAliasName: string;
    /**
     * The unique identifier of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentid
     */
    readonly agentId: string;
    /**
     * The description of the alias of the agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-description
     */
    readonly description?: string;
    /**
     * Contains details about the routing configuration of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-routingconfiguration
     */
    readonly routingConfiguration?: Array<CfnAgentAlias.AgentAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Specifies an inference profile as a resource in a top-level template.
 *
 * Use the `ModelSource` field to specify the inference profile to copy into the resource. For more information about using inference profiles in Amazon Bedrock , see [Improve resilience with cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::ApplicationInferenceProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html
 */
export declare class CfnApplicationInferenceProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationInferenceProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationInferenceProfile;
    /**
     * The time at which the inference profile was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the inference profile.
     *
     * @cloudformationAttribute InferenceProfileArn
     */
    readonly attrInferenceProfileArn: string;
    /**
     * The unique identifier of the inference profile.
     *
     * @cloudformationAttribute InferenceProfileId
     */
    readonly attrInferenceProfileId: string;
    /**
     * The ID or Amazon Resource Name (ARN) of the inference profile.
     *
     * @cloudformationAttribute InferenceProfileIdentifier
     */
    readonly attrInferenceProfileIdentifier: string;
    /**
     * A list of information about each model in the inference profile.
     *
     * @cloudformationAttribute Models
     */
    readonly attrModels: cdk.IResolvable;
    /**
     * The status of the inference profile. `ACTIVE` means that the inference profile is ready to be used.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The type of the inference profile. The following types are possible:
     *
     * - `SYSTEM_DEFINED` – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.
     * - `APPLICATION` – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.
     *
     * @cloudformationAttribute Type
     */
    readonly attrType: string;
    /**
     * The time at which the inference profile was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the inference profile.
     */
    description?: string;
    /**
     * The name of the inference profile.
     */
    inferenceProfileName: string;
    /**
     * Contains configurations for the inference profile to copy as the resource.
     */
    modelSource?: CfnApplicationInferenceProfile.InferenceProfileModelSourceProperty | cdk.IResolvable;
    /**
     * A list of tags associated with the inference profile.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationInferenceProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationInferenceProfile {
    /**
     * Contains information about the model or system-defined inference profile that is the source for an inference profile..
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodelsource.html
     */
    interface InferenceProfileModelSourceProperty {
        /**
         * The ARN of the model or system-defined inference profile that is the source for the inference profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodelsource.html#cfn-bedrock-applicationinferenceprofile-inferenceprofilemodelsource-copyfrom
         */
        readonly copyFrom: string;
    }
    /**
     * Contains information about a model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodel.html
     */
    interface InferenceProfileModelProperty {
        /**
         * The Amazon Resource Name (ARN) of the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodel.html#cfn-bedrock-applicationinferenceprofile-inferenceprofilemodel-modelarn
         */
        readonly modelArn?: string;
    }
}
/**
 * Properties for defining a `CfnApplicationInferenceProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html
 */
export interface CfnApplicationInferenceProfileProps {
    /**
     * The description of the inference profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-description
     */
    readonly description?: string;
    /**
     * The name of the inference profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-inferenceprofilename
     */
    readonly inferenceProfileName: string;
    /**
     * Contains configurations for the inference profile to copy as the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-modelsource
     */
    readonly modelSource?: CfnApplicationInferenceProfile.InferenceProfileModelSourceProperty | cdk.IResolvable;
    /**
     * A list of tags associated with the inference profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a data source as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - Name – Specify a name for the data source.
 * - KnowledgeBaseId – Specify the ID of the knowledge base for the data source to belong to.
 * - DataSourceConfiguration – Specify information about the Amazon S3 bucket containing the data source. The following sub-properties are required:
 *
 * - Type – Specify the value `S3` .
 *
 * For more information about setting up data sources in Amazon Bedrock , see [Set up a data source for your knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::DataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html
 */
export declare class CfnDataSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataSource;
    /**
     * The time at which the data source was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The unique identifier of the data source.
     *
     * @cloudformationAttribute DataSourceId
     */
    readonly attrDataSourceId: string;
    /**
     * The status of the data source. The following statuses are possible:
     *
     * - Available – The data source has been created and is ready for ingestion into the knowledge base.
     * - Deleting – The data source is being deleted.
     *
     * @cloudformationAttribute DataSourceStatus
     */
    readonly attrDataSourceStatus: string;
    /**
     * The detailed reasons on the failure to delete a data source.
     *
     * @cloudformationAttribute FailureReasons
     */
    readonly attrFailureReasons: Array<string>;
    /**
     * The time at which the data source was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The data deletion policy for the data source.
     */
    dataDeletionPolicy?: string;
    /**
     * The connection configuration for the data source.
     */
    dataSourceConfiguration: CfnDataSource.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * The description of the data source.
     */
    description?: string;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     */
    knowledgeBaseId: string;
    /**
     * The name of the data source.
     */
    name: string;
    /**
     * Contains details about the configuration of the server-side encryption.
     */
    serverSideEncryptionConfiguration?: cdk.IResolvable | CfnDataSource.ServerSideEncryptionConfigurationProperty;
    /**
     * Contains details about how to ingest the documents in the data source.
     */
    vectorIngestionConfiguration?: cdk.IResolvable | CfnDataSource.VectorIngestionConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataSource {
    /**
     * The connection configuration for the data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html
     */
    interface DataSourceConfigurationProperty {
        /**
         * The configuration information to connect to Confluence as your data source.
         *
         * > Confluence data source connector is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-confluenceconfiguration
         */
        readonly confluenceConfiguration?: CfnDataSource.ConfluenceDataSourceConfigurationProperty | cdk.IResolvable;
        /**
         * The configuration information to connect to Amazon S3 as your data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-s3configuration
         */
        readonly s3Configuration?: cdk.IResolvable | CfnDataSource.S3DataSourceConfigurationProperty;
        /**
         * The configuration information to connect to Salesforce as your data source.
         *
         * > Salesforce data source connector is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-salesforceconfiguration
         */
        readonly salesforceConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceDataSourceConfigurationProperty;
        /**
         * The configuration information to connect to SharePoint as your data source.
         *
         * > SharePoint data source connector is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-sharepointconfiguration
         */
        readonly sharePointConfiguration?: cdk.IResolvable | CfnDataSource.SharePointDataSourceConfigurationProperty;
        /**
         * The type of data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-type
         */
        readonly type: string;
        /**
         * The configuration of web URLs to crawl for your data source. You should be authorized to crawl the URLs.
         *
         * > Crawling web URLs as your data source is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html#cfn-bedrock-datasource-datasourceconfiguration-webconfiguration
         */
        readonly webConfiguration?: cdk.IResolvable | CfnDataSource.WebDataSourceConfigurationProperty;
    }
    /**
     * The configuration information to connect to Amazon S3 as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html
     */
    interface S3DataSourceConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the S3 bucket that contains your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html#cfn-bedrock-datasource-s3datasourceconfiguration-bucketarn
         */
        readonly bucketArn: string;
        /**
         * The account ID for the owner of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html#cfn-bedrock-datasource-s3datasourceconfiguration-bucketowneraccountid
         */
        readonly bucketOwnerAccountId?: string;
        /**
         * A list of S3 prefixes to include certain files or content.
         *
         * For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html#cfn-bedrock-datasource-s3datasourceconfiguration-inclusionprefixes
         */
        readonly inclusionPrefixes?: Array<string>;
    }
    /**
     * The configuration information to connect to Confluence as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencedatasourceconfiguration.html
     */
    interface ConfluenceDataSourceConfigurationProperty {
        /**
         * The configuration of the Confluence content.
         *
         * For example, configuring specific types of Confluence content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencedatasourceconfiguration.html#cfn-bedrock-datasource-confluencedatasourceconfiguration-crawlerconfiguration
         */
        readonly crawlerConfiguration?: CfnDataSource.ConfluenceCrawlerConfigurationProperty | cdk.IResolvable;
        /**
         * The endpoint information to connect to your Confluence data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencedatasourceconfiguration.html#cfn-bedrock-datasource-confluencedatasourceconfiguration-sourceconfiguration
         */
        readonly sourceConfiguration: CfnDataSource.ConfluenceSourceConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The endpoint information to connect to your Confluence data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencesourceconfiguration.html
     */
    interface ConfluenceSourceConfigurationProperty {
        /**
         * The supported authentication type to authenticate and connect to your Confluence instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencesourceconfiguration.html#cfn-bedrock-datasource-confluencesourceconfiguration-authtype
         */
        readonly authType: string;
        /**
         * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL.
         *
         * For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [Confluence connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/confluence-data-source-connector.html#configuration-confluence-connector) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencesourceconfiguration.html#cfn-bedrock-datasource-confluencesourceconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * The supported host type, whether online/cloud or server/on-premises.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencesourceconfiguration.html#cfn-bedrock-datasource-confluencesourceconfiguration-hosttype
         */
        readonly hostType: string;
        /**
         * The Confluence host URL or instance URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencesourceconfiguration.html#cfn-bedrock-datasource-confluencesourceconfiguration-hosturl
         */
        readonly hostUrl: string;
    }
    /**
     * The configuration of the Confluence content.
     *
     * For example, configuring specific types of Confluence content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencecrawlerconfiguration.html
     */
    interface ConfluenceCrawlerConfigurationProperty {
        /**
         * The configuration of filtering the Confluence content.
         *
         * For example, configuring regular expression patterns to include or exclude certain content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencecrawlerconfiguration.html#cfn-bedrock-datasource-confluencecrawlerconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnDataSource.CrawlFilterConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration of filtering the data source content.
     *
     * For example, configuring regular expression patterns to include or exclude certain content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-crawlfilterconfiguration.html
     */
    interface CrawlFilterConfigurationProperty {
        /**
         * The configuration of filtering certain objects or content types of the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-crawlfilterconfiguration.html#cfn-bedrock-datasource-crawlfilterconfiguration-patternobjectfilter
         */
        readonly patternObjectFilter?: cdk.IResolvable | CfnDataSource.PatternObjectFilterConfigurationProperty;
        /**
         * The type of filtering that you want to apply to certain objects or content of the data source.
         *
         * For example, the `PATTERN` type is regular expression patterns you can apply to filter your content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-crawlfilterconfiguration.html#cfn-bedrock-datasource-crawlfilterconfiguration-type
         */
        readonly type: string;
    }
    /**
     * The configuration of filtering certain objects or content types of the data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilterconfiguration.html
     */
    interface PatternObjectFilterConfigurationProperty {
        /**
         * The configuration of specific filters applied to your data source content.
         *
         * You can filter out or include certain content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilterconfiguration.html#cfn-bedrock-datasource-patternobjectfilterconfiguration-filters
         */
        readonly filters: Array<cdk.IResolvable | CfnDataSource.PatternObjectFilterProperty> | cdk.IResolvable;
    }
    /**
     * The specific filters applied to your data source content.
     *
     * You can filter out or include certain content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilter.html
     */
    interface PatternObjectFilterProperty {
        /**
         * A list of one or more exclusion regular expression patterns to exclude certain object types that adhere to the pattern.
         *
         * If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilter.html#cfn-bedrock-datasource-patternobjectfilter-exclusionfilters
         */
        readonly exclusionFilters?: Array<string>;
        /**
         * A list of one or more inclusion regular expression patterns to include certain object types that adhere to the pattern.
         *
         * If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilter.html#cfn-bedrock-datasource-patternobjectfilter-inclusionfilters
         */
        readonly inclusionFilters?: Array<string>;
        /**
         * The supported object type or content type of the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilter.html#cfn-bedrock-datasource-patternobjectfilter-objecttype
         */
        readonly objectType: string;
    }
    /**
     * The configuration information to connect to Salesforce as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcedatasourceconfiguration.html
     */
    interface SalesforceDataSourceConfigurationProperty {
        /**
         * The configuration of the Salesforce content.
         *
         * For example, configuring specific types of Salesforce content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcedatasourceconfiguration.html#cfn-bedrock-datasource-salesforcedatasourceconfiguration-crawlerconfiguration
         */
        readonly crawlerConfiguration?: cdk.IResolvable | CfnDataSource.SalesforceCrawlerConfigurationProperty;
        /**
         * The endpoint information to connect to your Salesforce data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcedatasourceconfiguration.html#cfn-bedrock-datasource-salesforcedatasourceconfiguration-sourceconfiguration
         */
        readonly sourceConfiguration: cdk.IResolvable | CfnDataSource.SalesforceSourceConfigurationProperty;
    }
    /**
     * The endpoint information to connect to your Salesforce data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcesourceconfiguration.html
     */
    interface SalesforceSourceConfigurationProperty {
        /**
         * The supported authentication type to authenticate and connect to your Salesforce instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcesourceconfiguration.html#cfn-bedrock-datasource-salesforcesourceconfiguration-authtype
         */
        readonly authType: string;
        /**
         * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL.
         *
         * For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [Salesforce connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/salesforce-data-source-connector.html#configuration-salesforce-connector) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcesourceconfiguration.html#cfn-bedrock-datasource-salesforcesourceconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * The Salesforce host URL or instance URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcesourceconfiguration.html#cfn-bedrock-datasource-salesforcesourceconfiguration-hosturl
         */
        readonly hostUrl: string;
    }
    /**
     * The configuration of the Salesforce content.
     *
     * For example, configuring specific types of Salesforce content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcecrawlerconfiguration.html
     */
    interface SalesforceCrawlerConfigurationProperty {
        /**
         * The configuration of filtering the Salesforce content.
         *
         * For example, configuring regular expression patterns to include or exclude certain content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcecrawlerconfiguration.html#cfn-bedrock-datasource-salesforcecrawlerconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnDataSource.CrawlFilterConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration information to connect to SharePoint as your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointdatasourceconfiguration.html
     */
    interface SharePointDataSourceConfigurationProperty {
        /**
         * The configuration of the SharePoint content.
         *
         * For example, configuring specific types of SharePoint content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointdatasourceconfiguration.html#cfn-bedrock-datasource-sharepointdatasourceconfiguration-crawlerconfiguration
         */
        readonly crawlerConfiguration?: cdk.IResolvable | CfnDataSource.SharePointCrawlerConfigurationProperty;
        /**
         * The endpoint information to connect to your SharePoint data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointdatasourceconfiguration.html#cfn-bedrock-datasource-sharepointdatasourceconfiguration-sourceconfiguration
         */
        readonly sourceConfiguration: cdk.IResolvable | CfnDataSource.SharePointSourceConfigurationProperty;
    }
    /**
     * The endpoint information to connect to your SharePoint data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html
     */
    interface SharePointSourceConfigurationProperty {
        /**
         * The supported authentication type to authenticate and connect to your SharePoint site/sites.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html#cfn-bedrock-datasource-sharepointsourceconfiguration-authtype
         */
        readonly authType: string;
        /**
         * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites.
         *
         * For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [SharePoint connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/sharepoint-data-source-connector.html#configuration-sharepoint-connector) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html#cfn-bedrock-datasource-sharepointsourceconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * The domain of your SharePoint instance or site URL/URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html#cfn-bedrock-datasource-sharepointsourceconfiguration-domain
         */
        readonly domain: string;
        /**
         * The supported host type, whether online/cloud or server/on-premises.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html#cfn-bedrock-datasource-sharepointsourceconfiguration-hosttype
         */
        readonly hostType: string;
        /**
         * A list of one or more SharePoint site URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html#cfn-bedrock-datasource-sharepointsourceconfiguration-siteurls
         */
        readonly siteUrls: Array<string>;
        /**
         * The identifier of your Microsoft 365 tenant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html#cfn-bedrock-datasource-sharepointsourceconfiguration-tenantid
         */
        readonly tenantId?: string;
    }
    /**
     * The configuration of the SharePoint content.
     *
     * For example, configuring specific types of SharePoint content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointcrawlerconfiguration.html
     */
    interface SharePointCrawlerConfigurationProperty {
        /**
         * The configuration of filtering the SharePoint content.
         *
         * For example, configuring regular expression patterns to include or exclude certain content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointcrawlerconfiguration.html#cfn-bedrock-datasource-sharepointcrawlerconfiguration-filterconfiguration
         */
        readonly filterConfiguration?: CfnDataSource.CrawlFilterConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration details for the web data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webdatasourceconfiguration.html
     */
    interface WebDataSourceConfigurationProperty {
        /**
         * The Web Crawler configuration details for the web data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webdatasourceconfiguration.html#cfn-bedrock-datasource-webdatasourceconfiguration-crawlerconfiguration
         */
        readonly crawlerConfiguration?: cdk.IResolvable | CfnDataSource.WebCrawlerConfigurationProperty;
        /**
         * The source configuration details for the web data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webdatasourceconfiguration.html#cfn-bedrock-datasource-webdatasourceconfiguration-sourceconfiguration
         */
        readonly sourceConfiguration: cdk.IResolvable | CfnDataSource.WebSourceConfigurationProperty;
    }
    /**
     * The configuration of the URL/URLs for the web content that you want to crawl.
     *
     * You should be authorized to crawl the URLs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-websourceconfiguration.html
     */
    interface WebSourceConfigurationProperty {
        /**
         * The configuration of the URL/URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-websourceconfiguration.html#cfn-bedrock-datasource-websourceconfiguration-urlconfiguration
         */
        readonly urlConfiguration: cdk.IResolvable | CfnDataSource.UrlConfigurationProperty;
    }
    /**
     * The configuration of web URLs that you want to crawl.
     *
     * You should be authorized to crawl the URLs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-urlconfiguration.html
     */
    interface UrlConfigurationProperty {
        /**
         * One or more seed or starting point URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-urlconfiguration.html#cfn-bedrock-datasource-urlconfiguration-seedurls
         */
        readonly seedUrls: Array<cdk.IResolvable | CfnDataSource.SeedUrlProperty> | cdk.IResolvable;
    }
    /**
     * The seed or starting point URL.
     *
     * You should be authorized to crawl the URL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-seedurl.html
     */
    interface SeedUrlProperty {
        /**
         * A seed or starting point URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-seedurl.html#cfn-bedrock-datasource-seedurl-url
         */
        readonly url: string;
    }
    /**
     * The configuration of web URLs that you want to crawl.
     *
     * You should be authorized to crawl the URLs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerconfiguration.html
     */
    interface WebCrawlerConfigurationProperty {
        /**
         * The configuration of crawl limits for the web URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerconfiguration.html#cfn-bedrock-datasource-webcrawlerconfiguration-crawlerlimits
         */
        readonly crawlerLimits?: cdk.IResolvable | CfnDataSource.WebCrawlerLimitsProperty;
        /**
         * A list of one or more exclusion regular expression patterns to exclude certain URLs.
         *
         * If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerconfiguration.html#cfn-bedrock-datasource-webcrawlerconfiguration-exclusionfilters
         */
        readonly exclusionFilters?: Array<string>;
        /**
         * A list of one or more inclusion regular expression patterns to include certain URLs.
         *
         * If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerconfiguration.html#cfn-bedrock-datasource-webcrawlerconfiguration-inclusionfilters
         */
        readonly inclusionFilters?: Array<string>;
        /**
         * The scope of what is crawled for your URLs.
         *
         * You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL "https://docs.aws.amazon.com/bedrock/latest/userguide/" and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain "aws.amazon.com" can also include sub domain "docs.aws.amazon.com".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerconfiguration.html#cfn-bedrock-datasource-webcrawlerconfiguration-scope
         */
        readonly scope?: string;
    }
    /**
     * The rate limits for the URLs that you want to crawl.
     *
     * You should be authorized to crawl the URLs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerlimits.html
     */
    interface WebCrawlerLimitsProperty {
        /**
         * The max rate at which pages are crawled, up to 300 per minute per host.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerlimits.html#cfn-bedrock-datasource-webcrawlerlimits-ratelimit
         */
        readonly rateLimit?: number;
    }
    /**
     * Contains the configuration for server-side encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-serversideencryptionconfiguration.html
     */
    interface ServerSideEncryptionConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-serversideencryptionconfiguration.html#cfn-bedrock-datasource-serversideencryptionconfiguration-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
    /**
     * Contains details about how to ingest the documents in a data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html
     */
    interface VectorIngestionConfigurationProperty {
        /**
         * Details about how to chunk the documents in the data source.
         *
         * A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html#cfn-bedrock-datasource-vectoringestionconfiguration-chunkingconfiguration
         */
        readonly chunkingConfiguration?: CfnDataSource.ChunkingConfigurationProperty | cdk.IResolvable;
        /**
         * A custom document transformer for parsed data source documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html#cfn-bedrock-datasource-vectoringestionconfiguration-customtransformationconfiguration
         */
        readonly customTransformationConfiguration?: CfnDataSource.CustomTransformationConfigurationProperty | cdk.IResolvable;
        /**
         * Configurations for a parser to use for parsing documents in your data source.
         *
         * If you exclude this field, the default parser will be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html#cfn-bedrock-datasource-vectoringestionconfiguration-parsingconfiguration
         */
        readonly parsingConfiguration?: cdk.IResolvable | CfnDataSource.ParsingConfigurationProperty;
    }
    /**
     * Details about how to chunk the documents in the data source.
     *
     * A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html
     */
    interface ChunkingConfigurationProperty {
        /**
         * Knowledge base can split your source data into chunks.
         *
         * A *chunk* refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for `NONE` , then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
         *
         * - `FIXED_SIZE` – Amazon Bedrock splits your source data into chunks of the approximate size that you set in the `fixedSizeChunkingConfiguration` .
         * - `HIERARCHICAL` – Split documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
         * - `SEMANTIC` – Split documents into chunks based on groups of similar content derived with natural language processing.
         * - `NONE` – Amazon Bedrock treats each file as one chunk. If you choose this option, you may want to pre-process your documents by splitting them into separate files.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html#cfn-bedrock-datasource-chunkingconfiguration-chunkingstrategy
         */
        readonly chunkingStrategy: string;
        /**
         * Configurations for when you choose fixed-size chunking.
         *
         * If you set the `chunkingStrategy` as `NONE` , exclude this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html#cfn-bedrock-datasource-chunkingconfiguration-fixedsizechunkingconfiguration
         */
        readonly fixedSizeChunkingConfiguration?: CfnDataSource.FixedSizeChunkingConfigurationProperty | cdk.IResolvable;
        /**
         * Settings for hierarchical document chunking for a data source.
         *
         * Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html#cfn-bedrock-datasource-chunkingconfiguration-hierarchicalchunkingconfiguration
         */
        readonly hierarchicalChunkingConfiguration?: CfnDataSource.HierarchicalChunkingConfigurationProperty | cdk.IResolvable;
        /**
         * Settings for semantic document chunking for a data source.
         *
         * Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html#cfn-bedrock-datasource-chunkingconfiguration-semanticchunkingconfiguration
         */
        readonly semanticChunkingConfiguration?: cdk.IResolvable | CfnDataSource.SemanticChunkingConfigurationProperty;
    }
    /**
     * Configurations for when you choose fixed-size chunking.
     *
     * If you set the `chunkingStrategy` as `NONE` , exclude this field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html
     */
    interface FixedSizeChunkingConfigurationProperty {
        /**
         * The maximum number of tokens to include in a chunk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html#cfn-bedrock-datasource-fixedsizechunkingconfiguration-maxtokens
         */
        readonly maxTokens: number;
        /**
         * The percentage of overlap between adjacent chunks of a data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html#cfn-bedrock-datasource-fixedsizechunkingconfiguration-overlappercentage
         */
        readonly overlapPercentage: number;
    }
    /**
     * Settings for hierarchical document chunking for a data source.
     *
     * Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
     *
     * You configure the number of tokens to overlap, or repeat across adjacent chunks. For example, if you set overlap tokens to 60, the last 60 tokens in the first chunk are also included at the beginning of the second chunk. For each layer, you must also configure the maximum number of tokens in a chunk.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkingconfiguration.html
     */
    interface HierarchicalChunkingConfigurationProperty {
        /**
         * Token settings for each layer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkingconfiguration.html#cfn-bedrock-datasource-hierarchicalchunkingconfiguration-levelconfigurations
         */
        readonly levelConfigurations: Array<CfnDataSource.HierarchicalChunkingLevelConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The number of tokens to repeat across chunks in the same layer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkingconfiguration.html#cfn-bedrock-datasource-hierarchicalchunkingconfiguration-overlaptokens
         */
        readonly overlapTokens: number;
    }
    /**
     * Token settings for a layer in a hierarchical chunking configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkinglevelconfiguration.html
     */
    interface HierarchicalChunkingLevelConfigurationProperty {
        /**
         * The maximum number of tokens that a chunk can contain in this layer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkinglevelconfiguration.html#cfn-bedrock-datasource-hierarchicalchunkinglevelconfiguration-maxtokens
         */
        readonly maxTokens: number;
    }
    /**
     * Settings for semantic document chunking for a data source.
     *
     * Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
     *
     * With semantic chunking, each sentence is compared to the next to determine how similar they are. You specify a threshold in the form of a percentile, where adjacent sentences that are less similar than that percentage of sentence pairs are divided into separate chunks. For example, if you set the threshold to 90, then the 10 percent of sentence pairs that are least similar are split. So if you have 101 sentences, 100 sentence pairs are compared, and the 10 with the least similarity are split, creating 11 chunks. These chunks are further split if they exceed the max token size.
     *
     * You must also specify a buffer size, which determines whether sentences are compared in isolation, or within a moving context window that includes the previous and following sentence. For example, if you set the buffer size to `1` , the embedding for sentence 10 is derived from sentences 9, 10, and 11 combined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-semanticchunkingconfiguration.html
     */
    interface SemanticChunkingConfigurationProperty {
        /**
         * The dissimilarity threshold for splitting chunks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-semanticchunkingconfiguration.html#cfn-bedrock-datasource-semanticchunkingconfiguration-breakpointpercentilethreshold
         */
        readonly breakpointPercentileThreshold: number;
        /**
         * The buffer size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-semanticchunkingconfiguration.html#cfn-bedrock-datasource-semanticchunkingconfiguration-buffersize
         */
        readonly bufferSize: number;
        /**
         * The maximum number of tokens that a chunk can contain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-semanticchunkingconfiguration.html#cfn-bedrock-datasource-semanticchunkingconfiguration-maxtokens
         */
        readonly maxTokens: number;
    }
    /**
     * Settings for customizing steps in the data source content ingestion pipeline.
     *
     * You can configure the data source to process documents with a Lambda function after they are parsed and converted into chunks. When you add a post-chunking transformation, the service stores chunked documents in an S3 bucket and invokes a Lambda function to process them.
     *
     * To process chunked documents with a Lambda function, define an S3 bucket path for input and output objects, and a transformation that specifies the Lambda function to invoke. You can use the Lambda function to customize how chunks are split, and the metadata for each chunk.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-customtransformationconfiguration.html
     */
    interface CustomTransformationConfigurationProperty {
        /**
         * An S3 bucket path for input and output objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-customtransformationconfiguration.html#cfn-bedrock-datasource-customtransformationconfiguration-intermediatestorage
         */
        readonly intermediateStorage: CfnDataSource.IntermediateStorageProperty | cdk.IResolvable;
        /**
         * A Lambda function that processes documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-customtransformationconfiguration.html#cfn-bedrock-datasource-customtransformationconfiguration-transformations
         */
        readonly transformations: Array<cdk.IResolvable | CfnDataSource.TransformationProperty> | cdk.IResolvable;
    }
    /**
     * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-intermediatestorage.html
     */
    interface IntermediateStorageProperty {
        /**
         * An S3 bucket path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-intermediatestorage.html#cfn-bedrock-datasource-intermediatestorage-s3location
         */
        readonly s3Location: cdk.IResolvable | CfnDataSource.S3LocationProperty;
    }
    /**
     * A storage location in an S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3location.html
     */
    interface S3LocationProperty {
        /**
         * An object URI starting with `s3://` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3location.html#cfn-bedrock-datasource-s3location-uri
         */
        readonly uri: string;
    }
    /**
     * A custom processing step for documents moving through a data source ingestion pipeline.
     *
     * To process documents after they have been converted into chunks, set the step to apply to `POST_CHUNKING` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformation.html
     */
    interface TransformationProperty {
        /**
         * When the service applies the transformation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformation.html#cfn-bedrock-datasource-transformation-steptoapply
         */
        readonly stepToApply: string;
        /**
         * A Lambda function that processes documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformation.html#cfn-bedrock-datasource-transformation-transformationfunction
         */
        readonly transformationFunction: cdk.IResolvable | CfnDataSource.TransformationFunctionProperty;
    }
    /**
     * A Lambda function that processes documents.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformationfunction.html
     */
    interface TransformationFunctionProperty {
        /**
         * The Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformationfunction.html#cfn-bedrock-datasource-transformationfunction-transformationlambdaconfiguration
         */
        readonly transformationLambdaConfiguration: cdk.IResolvable | CfnDataSource.TransformationLambdaConfigurationProperty;
    }
    /**
     * A Lambda function that processes documents.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformationlambdaconfiguration.html
     */
    interface TransformationLambdaConfigurationProperty {
        /**
         * The function's ARN identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformationlambdaconfiguration.html#cfn-bedrock-datasource-transformationlambdaconfiguration-lambdaarn
         */
        readonly lambdaArn: string;
    }
    /**
     * Settings for parsing document contents.
     *
     * If you exclude this field, the default parser converts the contents of each document into text before splitting it into chunks. Specify the parsing strategy to use in the `parsingStrategy` field and include the relevant configuration, or omit it to use the Amazon Bedrock default parser. For more information, see [Parsing options for your data source](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-advanced-parsing.html) .
     *
     * > If you specify `BEDROCK_DATA_AUTOMATION` or `BEDROCK_FOUNDATION_MODEL` and it fails to parse a file, the Amazon Bedrock default parser will be used instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingconfiguration.html
     */
    interface ParsingConfigurationProperty {
        /**
         * If you specify `BEDROCK_DATA_AUTOMATION` as the parsing strategy for ingesting your data source, use this object to modify configurations for using the Amazon Bedrock Data Automation parser.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingconfiguration.html#cfn-bedrock-datasource-parsingconfiguration-bedrockdataautomationconfiguration
         */
        readonly bedrockDataAutomationConfiguration?: CfnDataSource.BedrockDataAutomationConfigurationProperty | cdk.IResolvable;
        /**
         * If you specify `BEDROCK_FOUNDATION_MODEL` as the parsing strategy for ingesting your data source, use this object to modify configurations for using a foundation model to parse documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingconfiguration.html#cfn-bedrock-datasource-parsingconfiguration-bedrockfoundationmodelconfiguration
         */
        readonly bedrockFoundationModelConfiguration?: CfnDataSource.BedrockFoundationModelConfigurationProperty | cdk.IResolvable;
        /**
         * The parsing strategy for the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingconfiguration.html#cfn-bedrock-datasource-parsingconfiguration-parsingstrategy
         */
        readonly parsingStrategy: string;
    }
    /**
     * Settings for a foundation model used to parse documents for a data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockfoundationmodelconfiguration.html
     */
    interface BedrockFoundationModelConfigurationProperty {
        /**
         * The ARN of the foundation model to use for parsing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockfoundationmodelconfiguration.html#cfn-bedrock-datasource-bedrockfoundationmodelconfiguration-modelarn
         */
        readonly modelArn: string;
        /**
         * Specifies whether to enable parsing of multimodal data, including both text and/or images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockfoundationmodelconfiguration.html#cfn-bedrock-datasource-bedrockfoundationmodelconfiguration-parsingmodality
         */
        readonly parsingModality?: string;
        /**
         * Instructions for interpreting the contents of a document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockfoundationmodelconfiguration.html#cfn-bedrock-datasource-bedrockfoundationmodelconfiguration-parsingprompt
         */
        readonly parsingPrompt?: cdk.IResolvable | CfnDataSource.ParsingPromptProperty;
    }
    /**
     * Instructions for interpreting the contents of a document.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingprompt.html
     */
    interface ParsingPromptProperty {
        /**
         * Instructions for interpreting the contents of a document.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingprompt.html#cfn-bedrock-datasource-parsingprompt-parsingprompttext
         */
        readonly parsingPromptText: string;
    }
    /**
     * Contains configurations for using Amazon Bedrock Data Automation as the parser for ingesting your data sources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockdataautomationconfiguration.html
     */
    interface BedrockDataAutomationConfigurationProperty {
        /**
         * Specifies whether to enable parsing of multimodal data, including both text and/or images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockdataautomationconfiguration.html#cfn-bedrock-datasource-bedrockdataautomationconfiguration-parsingmodality
         */
        readonly parsingModality?: string;
    }
}
/**
 * Properties for defining a `CfnDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html
 */
export interface CfnDataSourceProps {
    /**
     * The data deletion policy for the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datadeletionpolicy
     */
    readonly dataDeletionPolicy?: string;
    /**
     * The connection configuration for the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration
     */
    readonly dataSourceConfiguration: CfnDataSource.DataSourceConfigurationProperty | cdk.IResolvable;
    /**
     * The description of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-description
     */
    readonly description?: string;
    /**
     * The unique identifier of the knowledge base to which the data source belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-knowledgebaseid
     */
    readonly knowledgeBaseId: string;
    /**
     * The name of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-name
     */
    readonly name: string;
    /**
     * Contains details about the configuration of the server-side encryption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-serversideencryptionconfiguration
     */
    readonly serverSideEncryptionConfiguration?: cdk.IResolvable | CfnDataSource.ServerSideEncryptionConfigurationProperty;
    /**
     * Contains details about how to ingest the documents in the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-vectoringestionconfiguration
     */
    readonly vectorIngestionConfiguration?: cdk.IResolvable | CfnDataSource.VectorIngestionConfigurationProperty;
}
/**
 * Creates a prompt flow that you can use to send an input through various steps to yield an output.
 *
 * You define a flow by configuring nodes, each of which corresponds to a step of the flow, and creating connections between the nodes to create paths to different outputs. You can define the flow in one of the following ways:
 *
 * - Define a [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html) in the `Definition` property.
 * - Provide the definition in the `DefinitionString` property as a JSON-formatted string matching the [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html) property.
 * - Provide an Amazon S3 location in the `DefinitionS3Location` property that matches the [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html) .
 *
 * If you use the `DefinitionString` or `DefinitionS3Location` property, you can use the `DefinitionSubstitutions` property to define key-value pairs to replace at runtime.
 *
 * For more information, see [How it works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html) and [Create a prompt flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-create.html) in the Amazon Bedrock User Guide.
 *
 * @cloudformationResource AWS::Bedrock::Flow
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html
 */
export declare class CfnFlow extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlow from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlow;
    /**
     * The Amazon Resource Name (ARN) of the flow.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time at which the flow was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The unique identifier of the flow.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The status of the flow. The following statuses are possible:
     *
     * - NotPrepared – The flow has been created or updated, but hasn't been prepared. If you just created the flow, you can't test it. If you updated the flow, the `DRAFT` version won't contain the latest changes for testing. Send a [PrepareFlow](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PrepareFlow.html) request to package the latest changes into the `DRAFT` version.
     * - Preparing – The flow is being prepared so that the `DRAFT` version contains the latest changes for testing.
     * - Prepared – The flow is prepared and the `DRAFT` version contains the latest changes for testing.
     * - Failed – The last API operation that you invoked on the flow failed. Send a [GetFlow](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html) request and check the error message in the `validations` field.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The time at which the flow was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * List of flow validations
     *
     * @cloudformationAttribute Validations
     */
    readonly attrValidations: cdk.IResolvable;
    /**
     * The latest version of the flow.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.
     */
    customerEncryptionKeyArn?: string;
    /**
     * The definition of the nodes and connections between the nodes in the flow.
     */
    definition?: CfnFlow.FlowDefinitionProperty | cdk.IResolvable;
    /**
     * The Amazon S3 location of the flow definition.
     */
    definitionS3Location?: cdk.IResolvable | CfnFlow.S3LocationProperty;
    /**
     * The definition of the flow as a JSON-formatted string.
     */
    definitionString?: string;
    /**
     * A map that specifies the mappings for placeholder variables in the prompt flow definition.
     */
    definitionSubstitutions?: cdk.IResolvable | Record<string, boolean | cdk.IResolvable | number | string>;
    /**
     * A description of the flow.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow.
     */
    executionRoleArn: string;
    /**
     * The name of the flow.
     */
    name: string;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * A map of tag keys and values.
     */
    testAliasTags?: cdk.IResolvable | Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlow {
    /**
     * The definition of the nodes and connections between nodes in the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html
     */
    interface FlowDefinitionProperty {
        /**
         * An array of connection definitions in the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html#cfn-bedrock-flow-flowdefinition-connections
         */
        readonly connections?: Array<CfnFlow.FlowConnectionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An array of node definitions in the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html#cfn-bedrock-flow-flowdefinition-nodes
         */
        readonly nodes?: Array<CfnFlow.FlowNodeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Contains configurations about a node in the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html
     */
    interface FlowNodeProperty {
        /**
         * Contains configurations for the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html#cfn-bedrock-flow-flownode-configuration
         */
        readonly configuration?: CfnFlow.FlowNodeConfigurationProperty | cdk.IResolvable;
        /**
         * An array of objects, each of which contains information about an input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html#cfn-bedrock-flow-flownode-inputs
         */
        readonly inputs?: Array<CfnFlow.FlowNodeInputProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A name for the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html#cfn-bedrock-flow-flownode-name
         */
        readonly name: string;
        /**
         * A list of objects, each of which contains information about an output from the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html#cfn-bedrock-flow-flownode-outputs
         */
        readonly outputs?: Array<CfnFlow.FlowNodeOutputProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The type of node.
         *
         * This value must match the name of the key that you provide in the configuration you provide in the `FlowNodeConfiguration` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html#cfn-bedrock-flow-flownode-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for a node in your flow.
     *
     * For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html
     */
    interface FlowNodeConfigurationProperty {
        /**
         * Contains configurations for an agent node in your flow.
         *
         * Invokes an alias of an agent and returns the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-agent
         */
        readonly agent?: CfnFlow.AgentFlowNodeConfigurationProperty | cdk.IResolvable;
        /**
         * Contains configurations for a collector node in your flow.
         *
         * Collects an iteration of inputs and consolidates them into an array of outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-collector
         */
        readonly collector?: any | cdk.IResolvable;
        /**
         * Contains configurations for a Condition node in your flow.
         *
         * Defines conditions that lead to different branches of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-condition
         */
        readonly condition?: CfnFlow.ConditionFlowNodeConfigurationProperty | cdk.IResolvable;
        /**
         * Contains configurations for an input flow node in your flow.
         *
         * The first node in the flow. `inputs` can't be specified for this node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-input
         */
        readonly input?: any | cdk.IResolvable;
        /**
         * Contains configurations for an iterator node in your flow.
         *
         * Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.
         *
         * The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-iterator
         */
        readonly iterator?: any | cdk.IResolvable;
        /**
         * Contains configurations for a knowledge base node in your flow.
         *
         * Queries a knowledge base and returns the retrieved results or generated response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-knowledgebase
         */
        readonly knowledgeBase?: cdk.IResolvable | CfnFlow.KnowledgeBaseFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Lambda function node in your flow.
         *
         * Invokes an AWS Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-lambdafunction
         */
        readonly lambdaFunction?: cdk.IResolvable | CfnFlow.LambdaFunctionFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Lex node in your flow.
         *
         * Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-lex
         */
        readonly lex?: cdk.IResolvable | CfnFlow.LexFlowNodeConfigurationProperty;
        /**
         * Contains configurations for an output flow node in your flow.
         *
         * The last node in the flow. `outputs` can't be specified for this node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-output
         */
        readonly output?: any | cdk.IResolvable;
        /**
         * Contains configurations for a prompt node in your flow.
         *
         * Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-prompt
         */
        readonly prompt?: cdk.IResolvable | CfnFlow.PromptFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Retrieval node in your flow.
         *
         * Retrieves data from an Amazon S3 location and returns it as the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-retrieval
         */
        readonly retrieval?: cdk.IResolvable | CfnFlow.RetrievalFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Storage node in your flow.
         *
         * Stores an input in an Amazon S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html#cfn-bedrock-flow-flownodeconfiguration-storage
         */
        readonly storage?: cdk.IResolvable | CfnFlow.StorageFlowNodeConfigurationProperty;
    }
    /**
     * Contains configurations for a knowledge base node in a flow.
     *
     * This node takes a query as the input and returns, as the output, the retrieved responses directly (as an array) or a response generated based on the retrieved responses. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html
     */
    interface KnowledgeBaseFlowNodeConfigurationProperty {
        /**
         * Contains configurations for a guardrail to apply during query and response generation for the knowledge base in this configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html#cfn-bedrock-flow-knowledgebaseflownodeconfiguration-guardrailconfiguration
         */
        readonly guardrailConfiguration?: CfnFlow.GuardrailConfigurationProperty | cdk.IResolvable;
        /**
         * The unique identifier of the knowledge base to query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html#cfn-bedrock-flow-knowledgebaseflownodeconfiguration-knowledgebaseid
         */
        readonly knowledgeBaseId: string;
        /**
         * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to use to generate a response from the query results. Omit this field if you want to return the retrieved results as an array.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html#cfn-bedrock-flow-knowledgebaseflownodeconfiguration-modelid
         */
        readonly modelId?: string;
    }
    /**
     * Configuration information for a guardrail that you use with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-guardrailconfiguration.html
     */
    interface GuardrailConfigurationProperty {
        /**
         * The identifier for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-guardrailconfiguration.html#cfn-bedrock-flow-guardrailconfiguration-guardrailidentifier
         */
        readonly guardrailIdentifier?: string;
        /**
         * The version of the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-guardrailconfiguration.html#cfn-bedrock-flow-guardrailconfiguration-guardrailversion
         */
        readonly guardrailVersion?: string;
    }
    /**
     * Defines a condition node in your flow.
     *
     * You can specify conditions that determine which node comes next in the flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-conditionflownodeconfiguration.html
     */
    interface ConditionFlowNodeConfigurationProperty {
        /**
         * An array of conditions.
         *
         * Each member contains the name of a condition and an expression that defines the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-conditionflownodeconfiguration.html#cfn-bedrock-flow-conditionflownodeconfiguration-conditions
         */
        readonly conditions: Array<CfnFlow.FlowConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Defines a condition in the condition node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowcondition.html
     */
    interface FlowConditionProperty {
        /**
         * Defines the condition.
         *
         * You must refer to at least one of the inputs in the condition. For more information, expand the Condition node section in [Node types in prompt flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html#flows-nodes) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowcondition.html#cfn-bedrock-flow-flowcondition-expression
         */
        readonly expression?: string;
        /**
         * A name for the condition that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowcondition.html#cfn-bedrock-flow-flowcondition-name
         */
        readonly name: string;
    }
    /**
     * Contains configurations for a Lex node in the flow.
     *
     * You specify a Amazon Lex bot to invoke. This node takes an utterance as the input and returns as the output the intent identified by the Amazon Lex bot. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lexflownodeconfiguration.html
     */
    interface LexFlowNodeConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon Lex bot alias to invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lexflownodeconfiguration.html#cfn-bedrock-flow-lexflownodeconfiguration-botaliasarn
         */
        readonly botAliasArn: string;
        /**
         * The Region to invoke the Amazon Lex bot in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lexflownodeconfiguration.html#cfn-bedrock-flow-lexflownodeconfiguration-localeid
         */
        readonly localeId: string;
    }
    /**
     * Contains configurations for a prompt node in the flow.
     *
     * You can use a prompt from Prompt management or you can define one in this node. If the prompt contains variables, the inputs into this node will fill in the variables. The output from this node is the response generated by the model. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeconfiguration.html
     */
    interface PromptFlowNodeConfigurationProperty {
        /**
         * Contains configurations for a guardrail to apply to the prompt in this node and the response generated from it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeconfiguration.html#cfn-bedrock-flow-promptflownodeconfiguration-guardrailconfiguration
         */
        readonly guardrailConfiguration?: CfnFlow.GuardrailConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies whether the prompt is from Prompt management or defined inline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeconfiguration.html#cfn-bedrock-flow-promptflownodeconfiguration-sourceconfiguration
         */
        readonly sourceConfiguration: cdk.IResolvable | CfnFlow.PromptFlowNodeSourceConfigurationProperty;
    }
    /**
     * Contains configurations for a prompt and whether it is from Prompt management or defined inline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodesourceconfiguration.html
     */
    interface PromptFlowNodeSourceConfigurationProperty {
        /**
         * Contains configurations for a prompt that is defined inline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodesourceconfiguration.html#cfn-bedrock-flow-promptflownodesourceconfiguration-inline
         */
        readonly inline?: cdk.IResolvable | CfnFlow.PromptFlowNodeInlineConfigurationProperty;
        /**
         * Contains configurations for a prompt from Prompt management.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodesourceconfiguration.html#cfn-bedrock-flow-promptflownodesourceconfiguration-resource
         */
        readonly resource?: cdk.IResolvable | CfnFlow.PromptFlowNodeResourceConfigurationProperty;
    }
    /**
     * Contains configurations for a prompt from Prompt management to use in a node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownoderesourceconfiguration.html
     */
    interface PromptFlowNodeResourceConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the prompt from Prompt management.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownoderesourceconfiguration.html#cfn-bedrock-flow-promptflownoderesourceconfiguration-promptarn
         */
        readonly promptArn: string;
    }
    /**
     * Contains configurations for a prompt defined inline in the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html
     */
    interface PromptFlowNodeInlineConfigurationProperty {
        /**
         * Contains inference configurations for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-inferenceconfiguration
         */
        readonly inferenceConfiguration?: cdk.IResolvable | CfnFlow.PromptInferenceConfigurationProperty;
        /**
         * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to run inference with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-modelid
         */
        readonly modelId: string;
        /**
         * Contains a prompt and variables in the prompt that can be replaced with values at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-templateconfiguration
         */
        readonly templateConfiguration: cdk.IResolvable | CfnFlow.PromptTemplateConfigurationProperty;
        /**
         * The type of prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-templatetype
         */
        readonly templateType: string;
    }
    /**
     * Contains the message for a prompt.
     *
     * For more information, see [Construct and store reusable prompts with Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-prompttemplateconfiguration.html
     */
    interface PromptTemplateConfigurationProperty {
        /**
         * Contains configurations for the text in a message for a prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-prompttemplateconfiguration.html#cfn-bedrock-flow-prompttemplateconfiguration-text
         */
        readonly text: cdk.IResolvable | CfnFlow.TextPromptTemplateConfigurationProperty;
    }
    /**
     * Contains configurations for a text prompt template.
     *
     * To include a variable, enclose a word in double curly braces as in `{{variable}}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-textprompttemplateconfiguration.html
     */
    interface TextPromptTemplateConfigurationProperty {
        /**
         * An array of the variables in the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-textprompttemplateconfiguration.html#cfn-bedrock-flow-textprompttemplateconfiguration-inputvariables
         */
        readonly inputVariables?: Array<cdk.IResolvable | CfnFlow.PromptInputVariableProperty> | cdk.IResolvable;
        /**
         * The message for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-textprompttemplateconfiguration.html#cfn-bedrock-flow-textprompttemplateconfiguration-text
         */
        readonly text: string;
    }
    /**
     * Contains information about a variable in the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptinputvariable.html
     */
    interface PromptInputVariableProperty {
        /**
         * The name of the variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptinputvariable.html#cfn-bedrock-flow-promptinputvariable-name
         */
        readonly name?: string;
    }
    /**
     * Contains inference configurations for the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptinferenceconfiguration.html
     */
    interface PromptInferenceConfigurationProperty {
        /**
         * Contains inference configurations for a text prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptinferenceconfiguration.html#cfn-bedrock-flow-promptinferenceconfiguration-text
         */
        readonly text: cdk.IResolvable | CfnFlow.PromptModelInferenceConfigurationProperty;
    }
    /**
     * Contains inference configurations related to model inference for a prompt.
     *
     * For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html
     */
    interface PromptModelInferenceConfigurationProperty {
        /**
         * The maximum number of tokens to return in the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-maxtokens
         */
        readonly maxTokens?: number;
        /**
         * A list of strings that define sequences after which the model will stop generating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-stopsequences
         */
        readonly stopSequences?: Array<string>;
        /**
         * Controls the randomness of the response.
         *
         * Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-temperature
         */
        readonly temperature?: number;
        /**
         * The percentage of most-likely candidates that the model considers for the next token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-topp
         */
        readonly topP?: number;
    }
    /**
     * Contains configurations for a Lambda function node in the flow.
     *
     * You specify the Lambda function to invoke and the inputs into the function. The output is the response that is defined in the Lambda function. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lambdafunctionflownodeconfiguration.html
     */
    interface LambdaFunctionFlowNodeConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Lambda function to invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lambdafunctionflownodeconfiguration.html#cfn-bedrock-flow-lambdafunctionflownodeconfiguration-lambdaarn
         */
        readonly lambdaArn: string;
    }
    /**
     * Defines an agent node in your flow.
     *
     * You specify the agent to invoke at this point in the flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-agentflownodeconfiguration.html
     */
    interface AgentFlowNodeConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the alias of the agent to invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-agentflownodeconfiguration.html#cfn-bedrock-flow-agentflownodeconfiguration-agentaliasarn
         */
        readonly agentAliasArn: string;
    }
    /**
     * Contains configurations for a Storage node in a flow.
     *
     * This node stores the input in an Amazon S3 location that you specify.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodeconfiguration.html
     */
    interface StorageFlowNodeConfigurationProperty {
        /**
         * Contains configurations for the service to use for storing the input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodeconfiguration.html#cfn-bedrock-flow-storageflownodeconfiguration-serviceconfiguration
         */
        readonly serviceConfiguration: cdk.IResolvable | CfnFlow.StorageFlowNodeServiceConfigurationProperty;
    }
    /**
     * Contains configurations for the service to use for storing the input into the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodeserviceconfiguration.html
     */
    interface StorageFlowNodeServiceConfigurationProperty {
        /**
         * Contains configurations for the Amazon S3 location in which to store the input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodeserviceconfiguration.html#cfn-bedrock-flow-storageflownodeserviceconfiguration-s3
         */
        readonly s3?: cdk.IResolvable | CfnFlow.StorageFlowNodeS3ConfigurationProperty;
    }
    /**
     * Contains configurations for the Amazon S3 location in which to store the input into the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodes3configuration.html
     */
    interface StorageFlowNodeS3ConfigurationProperty {
        /**
         * The name of the Amazon S3 bucket in which to store the input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodes3configuration.html#cfn-bedrock-flow-storageflownodes3configuration-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * Contains configurations for a Retrieval node in a flow.
     *
     * This node retrieves data from the Amazon S3 location that you specify and returns it as the output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodeconfiguration.html
     */
    interface RetrievalFlowNodeConfigurationProperty {
        /**
         * Contains configurations for the service to use for retrieving data to return as the output from the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodeconfiguration.html#cfn-bedrock-flow-retrievalflownodeconfiguration-serviceconfiguration
         */
        readonly serviceConfiguration: cdk.IResolvable | CfnFlow.RetrievalFlowNodeServiceConfigurationProperty;
    }
    /**
     * Contains configurations for the service to use for retrieving data to return as the output from the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodeserviceconfiguration.html
     */
    interface RetrievalFlowNodeServiceConfigurationProperty {
        /**
         * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodeserviceconfiguration.html#cfn-bedrock-flow-retrievalflownodeserviceconfiguration-s3
         */
        readonly s3?: cdk.IResolvable | CfnFlow.RetrievalFlowNodeS3ConfigurationProperty;
    }
    /**
     * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodes3configuration.html
     */
    interface RetrievalFlowNodeS3ConfigurationProperty {
        /**
         * The name of the Amazon S3 bucket from which to retrieve data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodes3configuration.html#cfn-bedrock-flow-retrievalflownodes3configuration-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * Contains configurations for an input to a node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinput.html
     */
    interface FlowNodeInputProperty {
        /**
         * An expression that formats the input for the node.
         *
         * For an explanation of how to create expressions, see [Expressions in Prompt flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-expressions.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinput.html#cfn-bedrock-flow-flownodeinput-expression
         */
        readonly expression: string;
        /**
         * A name for the input that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinput.html#cfn-bedrock-flow-flownodeinput-name
         */
        readonly name: string;
        /**
         * The data type of the input.
         *
         * If the input doesn't match this type at runtime, a validation error will be thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinput.html#cfn-bedrock-flow-flownodeinput-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for an output from a node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeoutput.html
     */
    interface FlowNodeOutputProperty {
        /**
         * A name for the output that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeoutput.html#cfn-bedrock-flow-flownodeoutput-name
         */
        readonly name: string;
        /**
         * The data type of the output.
         *
         * If the output doesn't match this type at runtime, a validation error will be thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeoutput.html#cfn-bedrock-flow-flownodeoutput-type
         */
        readonly type: string;
    }
    /**
     * Contains information about a connection between two nodes in the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html
     */
    interface FlowConnectionProperty {
        /**
         * The configuration of the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html#cfn-bedrock-flow-flowconnection-configuration
         */
        readonly configuration?: CfnFlow.FlowConnectionConfigurationProperty | cdk.IResolvable;
        /**
         * A name for the connection that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html#cfn-bedrock-flow-flowconnection-name
         */
        readonly name: string;
        /**
         * The node that the connection starts at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html#cfn-bedrock-flow-flowconnection-source
         */
        readonly source: string;
        /**
         * The node that the connection ends at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html#cfn-bedrock-flow-flowconnection-target
         */
        readonly target: string;
        /**
         * Whether the source node that the connection begins from is a condition node ( `Conditional` ) or not ( `Data` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html#cfn-bedrock-flow-flowconnection-type
         */
        readonly type: string;
    }
    /**
     * The configuration of the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnectionconfiguration.html
     */
    interface FlowConnectionConfigurationProperty {
        /**
         * The configuration of a connection originating from a Condition node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnectionconfiguration.html#cfn-bedrock-flow-flowconnectionconfiguration-conditional
         */
        readonly conditional?: CfnFlow.FlowConditionalConnectionConfigurationProperty | cdk.IResolvable;
        /**
         * The configuration of a connection originating from a node that isn't a Condition node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnectionconfiguration.html#cfn-bedrock-flow-flowconnectionconfiguration-data
         */
        readonly data?: CfnFlow.FlowDataConnectionConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration of a connection originating from a node that isn't a Condition node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdataconnectionconfiguration.html
     */
    interface FlowDataConnectionConfigurationProperty {
        /**
         * The name of the output in the source node that the connection begins from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdataconnectionconfiguration.html#cfn-bedrock-flow-flowdataconnectionconfiguration-sourceoutput
         */
        readonly sourceOutput: string;
        /**
         * The name of the input in the target node that the connection ends at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdataconnectionconfiguration.html#cfn-bedrock-flow-flowdataconnectionconfiguration-targetinput
         */
        readonly targetInput: string;
    }
    /**
     * The configuration of a connection between a condition node and another node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconditionalconnectionconfiguration.html
     */
    interface FlowConditionalConnectionConfigurationProperty {
        /**
         * The condition that triggers this connection.
         *
         * For more information about how to write conditions, see the *Condition* node type in the [Node types](https://docs.aws.amazon.com/bedrock/latest/userguide/node-types.html) topic in the Amazon Bedrock User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconditionalconnectionconfiguration.html#cfn-bedrock-flow-flowconditionalconnectionconfiguration-condition
         */
        readonly condition: string;
    }
    /**
     * The S3 location of the flow definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The S3 bucket containing the flow definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-s3location.html#cfn-bedrock-flow-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The object key for the S3 location containing the definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-s3location.html#cfn-bedrock-flow-s3location-key
         */
        readonly key: string;
        /**
         * The Amazon S3 location from which to retrieve data for an S3 retrieve node or to which to store data for an S3 storage node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-s3location.html#cfn-bedrock-flow-s3location-version
         */
        readonly version?: string;
    }
    /**
     * Contains information about validation of the flow.
     *
     * This data type is used in the following API operations:
     *
     * - [GetFlow response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlow.html#API_agent_GetFlow_ResponseSyntax)
     * - [GetFlowVersion response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_GetFlowVersion.html#API_agent_GetFlowVersion_ResponseSyntax)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowvalidation.html
     */
    interface FlowValidationProperty {
        /**
         * A message describing the validation error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowvalidation.html#cfn-bedrock-flow-flowvalidation-message
         */
        readonly message: string;
    }
}
/**
 * Properties for defining a `CfnFlow`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html
 */
export interface CfnFlowProps {
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-customerencryptionkeyarn
     */
    readonly customerEncryptionKeyArn?: string;
    /**
     * The definition of the nodes and connections between the nodes in the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definition
     */
    readonly definition?: CfnFlow.FlowDefinitionProperty | cdk.IResolvable;
    /**
     * The Amazon S3 location of the flow definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definitions3location
     */
    readonly definitionS3Location?: cdk.IResolvable | CfnFlow.S3LocationProperty;
    /**
     * The definition of the flow as a JSON-formatted string.
     *
     * The string must match the format in [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definitionstring
     */
    readonly definitionString?: string;
    /**
     * A map that specifies the mappings for placeholder variables in the prompt flow definition.
     *
     * This enables the customer to inject values obtained at runtime. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map. Only supported with the `DefinitionString` and `DefinitionS3Location` fields.
     *
     * Substitutions must follow the syntax: `${key_name}` or `${variable_1,variable_2,...}` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definitionsubstitutions
     */
    readonly definitionSubstitutions?: cdk.IResolvable | Record<string, boolean | cdk.IResolvable | number | string>;
    /**
     * A description of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow.
     *
     * For more information, see [Create a service row for flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-executionrolearn
     */
    readonly executionRoleArn: string;
    /**
     * The name of the flow.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-name
     */
    readonly name: string;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * A map of tag keys and values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-testaliastags
     */
    readonly testAliasTags?: cdk.IResolvable | Record<string, string>;
}
/**
 * Creates an alias of a flow for deployment.
 *
 * For more information, see [Deploy a flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html) in the Amazon Bedrock User Guide.
 *
 * @cloudformationResource AWS::Bedrock::FlowAlias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html
 */
export declare class CfnFlowAlias extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlowAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlowAlias;
    /**
     * The Amazon Resource Name (ARN) of the alias.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time at which the alias was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The unique identifier of the flow.
     *
     * @cloudformationAttribute FlowId
     */
    readonly attrFlowId: string;
    /**
     * The unique identifier of the alias of the flow.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The time at which the alias was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the alias.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the alias.
     */
    flowArn: string;
    /**
     * The name of the alias.
     */
    name: string;
    /**
     * A list of configurations about the versions that the alias maps to.
     */
    routingConfiguration: Array<CfnFlowAlias.FlowAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlowAlias {
    /**
     * Contains information about a version that the alias maps to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowalias-flowaliasroutingconfigurationlistitem.html
     */
    interface FlowAliasRoutingConfigurationListItemProperty {
        /**
         * The version that the alias maps to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowalias-flowaliasroutingconfigurationlistitem.html#cfn-bedrock-flowalias-flowaliasroutingconfigurationlistitem-flowversion
         */
        readonly flowVersion?: string;
    }
}
/**
 * Properties for defining a `CfnFlowAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html
 */
export interface CfnFlowAliasProps {
    /**
     * A description of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-flowarn
     */
    readonly flowArn: string;
    /**
     * The name of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-name
     */
    readonly name: string;
    /**
     * A list of configurations about the versions that the alias maps to.
     *
     * Currently, you can only specify one.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-routingconfiguration
     */
    readonly routingConfiguration: Array<CfnFlowAlias.FlowAliasRoutingConfigurationListItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a version of the flow that you can deploy.
 *
 * For more information, see [Deploy a flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html) in the Amazon Bedrock User Guide.
 *
 * @cloudformationResource AWS::Bedrock::FlowVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html
 */
export declare class CfnFlowVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFlowVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFlowVersion;
    /**
     * The time at the version was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the flow version is encrypted with.
     *
     * @cloudformationAttribute CustomerEncryptionKeyArn
     */
    readonly attrCustomerEncryptionKeyArn: string;
    /**
     * Flow definition
     *
     * @cloudformationAttribute Definition
     */
    readonly attrDefinition: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service row for flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
     *
     * @cloudformationAttribute ExecutionRoleArn
     */
    readonly attrExecutionRoleArn: string;
    /**
     * The unique identifier of the flow.
     *
     * @cloudformationAttribute FlowId
     */
    readonly attrFlowId: string;
    /**
     * The name of the flow.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The status of the flow.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The version of the flow.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * The description of the flow version.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow that the version belongs to.
     */
    flowArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFlowVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFlowVersion {
    /**
     * The definition of the nodes and connections between nodes in the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdefinition.html
     */
    interface FlowDefinitionProperty {
        /**
         * An array of connection definitions in the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdefinition.html#cfn-bedrock-flowversion-flowdefinition-connections
         */
        readonly connections?: Array<CfnFlowVersion.FlowConnectionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An array of node definitions in the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdefinition.html#cfn-bedrock-flowversion-flowdefinition-nodes
         */
        readonly nodes?: Array<CfnFlowVersion.FlowNodeProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Contains configurations about a node in the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html
     */
    interface FlowNodeProperty {
        /**
         * Contains configurations for the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html#cfn-bedrock-flowversion-flownode-configuration
         */
        readonly configuration?: CfnFlowVersion.FlowNodeConfigurationProperty | cdk.IResolvable;
        /**
         * An array of objects, each of which contains information about an input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html#cfn-bedrock-flowversion-flownode-inputs
         */
        readonly inputs?: Array<CfnFlowVersion.FlowNodeInputProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A name for the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html#cfn-bedrock-flowversion-flownode-name
         */
        readonly name: string;
        /**
         * A list of objects, each of which contains information about an output from the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html#cfn-bedrock-flowversion-flownode-outputs
         */
        readonly outputs?: Array<CfnFlowVersion.FlowNodeOutputProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The type of node.
         *
         * This value must match the name of the key that you provide in the configuration you provide in the `FlowNodeConfiguration` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html#cfn-bedrock-flowversion-flownode-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for a node in your flow.
     *
     * For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html
     */
    interface FlowNodeConfigurationProperty {
        /**
         * Contains configurations for an agent node in your flow.
         *
         * Invokes an alias of an agent and returns the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-agent
         */
        readonly agent?: CfnFlowVersion.AgentFlowNodeConfigurationProperty | cdk.IResolvable;
        /**
         * Contains configurations for a collector node in your flow.
         *
         * Collects an iteration of inputs and consolidates them into an array of outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-collector
         */
        readonly collector?: any | cdk.IResolvable;
        /**
         * Contains configurations for a Condition node in your flow.
         *
         * Defines conditions that lead to different branches of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-condition
         */
        readonly condition?: CfnFlowVersion.ConditionFlowNodeConfigurationProperty | cdk.IResolvable;
        /**
         * Contains configurations for an input flow node in your flow.
         *
         * The first node in the flow. `inputs` can't be specified for this node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-input
         */
        readonly input?: any | cdk.IResolvable;
        /**
         * Contains configurations for an iterator node in your flow.
         *
         * Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.
         *
         * The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-iterator
         */
        readonly iterator?: any | cdk.IResolvable;
        /**
         * Contains configurations for a knowledge base node in your flow.
         *
         * Queries a knowledge base and returns the retrieved results or generated response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-knowledgebase
         */
        readonly knowledgeBase?: cdk.IResolvable | CfnFlowVersion.KnowledgeBaseFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Lambda function node in your flow.
         *
         * Invokes an AWS Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-lambdafunction
         */
        readonly lambdaFunction?: cdk.IResolvable | CfnFlowVersion.LambdaFunctionFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Lex node in your flow.
         *
         * Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-lex
         */
        readonly lex?: cdk.IResolvable | CfnFlowVersion.LexFlowNodeConfigurationProperty;
        /**
         * Contains configurations for an output flow node in your flow.
         *
         * The last node in the flow. `outputs` can't be specified for this node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-output
         */
        readonly output?: any | cdk.IResolvable;
        /**
         * Contains configurations for a prompt node in your flow.
         *
         * Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-prompt
         */
        readonly prompt?: cdk.IResolvable | CfnFlowVersion.PromptFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Retrieval node in your flow.
         *
         * Retrieves data from an Amazon S3 location and returns it as the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-retrieval
         */
        readonly retrieval?: cdk.IResolvable | CfnFlowVersion.RetrievalFlowNodeConfigurationProperty;
        /**
         * Contains configurations for a Storage node in your flow.
         *
         * Stores an input in an Amazon S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html#cfn-bedrock-flowversion-flownodeconfiguration-storage
         */
        readonly storage?: cdk.IResolvable | CfnFlowVersion.StorageFlowNodeConfigurationProperty;
    }
    /**
     * Contains configurations for a knowledge base node in a flow.
     *
     * This node takes a query as the input and returns, as the output, the retrieved responses directly (as an array) or a response generated based on the retrieved responses. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-knowledgebaseflownodeconfiguration.html
     */
    interface KnowledgeBaseFlowNodeConfigurationProperty {
        /**
         * Contains configurations for a guardrail to apply during query and response generation for the knowledge base in this configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-knowledgebaseflownodeconfiguration.html#cfn-bedrock-flowversion-knowledgebaseflownodeconfiguration-guardrailconfiguration
         */
        readonly guardrailConfiguration?: CfnFlowVersion.GuardrailConfigurationProperty | cdk.IResolvable;
        /**
         * The unique identifier of the knowledge base to query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-knowledgebaseflownodeconfiguration.html#cfn-bedrock-flowversion-knowledgebaseflownodeconfiguration-knowledgebaseid
         */
        readonly knowledgeBaseId: string;
        /**
         * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to use to generate a response from the query results. Omit this field if you want to return the retrieved results as an array.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-knowledgebaseflownodeconfiguration.html#cfn-bedrock-flowversion-knowledgebaseflownodeconfiguration-modelid
         */
        readonly modelId?: string;
    }
    /**
     * Configuration information for a guardrail that you use with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-guardrailconfiguration.html
     */
    interface GuardrailConfigurationProperty {
        /**
         * The identifier for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-guardrailconfiguration.html#cfn-bedrock-flowversion-guardrailconfiguration-guardrailidentifier
         */
        readonly guardrailIdentifier?: string;
        /**
         * The version of the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-guardrailconfiguration.html#cfn-bedrock-flowversion-guardrailconfiguration-guardrailversion
         */
        readonly guardrailVersion?: string;
    }
    /**
     * Defines a condition node in your flow.
     *
     * You can specify conditions that determine which node comes next in the flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-conditionflownodeconfiguration.html
     */
    interface ConditionFlowNodeConfigurationProperty {
        /**
         * An array of conditions.
         *
         * Each member contains the name of a condition and an expression that defines the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-conditionflownodeconfiguration.html#cfn-bedrock-flowversion-conditionflownodeconfiguration-conditions
         */
        readonly conditions: Array<CfnFlowVersion.FlowConditionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Defines a condition in the condition node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowcondition.html
     */
    interface FlowConditionProperty {
        /**
         * Defines the condition.
         *
         * You must refer to at least one of the inputs in the condition. For more information, expand the Condition node section in [Node types in prompt flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html#flows-nodes) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowcondition.html#cfn-bedrock-flowversion-flowcondition-expression
         */
        readonly expression?: string;
        /**
         * A name for the condition that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowcondition.html#cfn-bedrock-flowversion-flowcondition-name
         */
        readonly name: string;
    }
    /**
     * Contains configurations for a Lex node in the flow.
     *
     * You specify a Amazon Lex bot to invoke. This node takes an utterance as the input and returns as the output the intent identified by the Amazon Lex bot. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lexflownodeconfiguration.html
     */
    interface LexFlowNodeConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon Lex bot alias to invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lexflownodeconfiguration.html#cfn-bedrock-flowversion-lexflownodeconfiguration-botaliasarn
         */
        readonly botAliasArn: string;
        /**
         * The Region to invoke the Amazon Lex bot in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lexflownodeconfiguration.html#cfn-bedrock-flowversion-lexflownodeconfiguration-localeid
         */
        readonly localeId: string;
    }
    /**
     * Contains configurations for a prompt node in the flow.
     *
     * You can use a prompt from Prompt management or you can define one in this node. If the prompt contains variables, the inputs into this node will fill in the variables. The output from this node is the response generated by the model. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeconfiguration.html
     */
    interface PromptFlowNodeConfigurationProperty {
        /**
         * Contains configurations for a guardrail to apply to the prompt in this node and the response generated from it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeconfiguration.html#cfn-bedrock-flowversion-promptflownodeconfiguration-guardrailconfiguration
         */
        readonly guardrailConfiguration?: CfnFlowVersion.GuardrailConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies whether the prompt is from Prompt management or defined inline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeconfiguration.html#cfn-bedrock-flowversion-promptflownodeconfiguration-sourceconfiguration
         */
        readonly sourceConfiguration: cdk.IResolvable | CfnFlowVersion.PromptFlowNodeSourceConfigurationProperty;
    }
    /**
     * Contains configurations for a prompt and whether it is from Prompt management or defined inline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodesourceconfiguration.html
     */
    interface PromptFlowNodeSourceConfigurationProperty {
        /**
         * Contains configurations for a prompt that is defined inline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodesourceconfiguration.html#cfn-bedrock-flowversion-promptflownodesourceconfiguration-inline
         */
        readonly inline?: cdk.IResolvable | CfnFlowVersion.PromptFlowNodeInlineConfigurationProperty;
        /**
         * Contains configurations for a prompt from Prompt management.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodesourceconfiguration.html#cfn-bedrock-flowversion-promptflownodesourceconfiguration-resource
         */
        readonly resource?: cdk.IResolvable | CfnFlowVersion.PromptFlowNodeResourceConfigurationProperty;
    }
    /**
     * Contains configurations for a prompt from Prompt management to use in a node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownoderesourceconfiguration.html
     */
    interface PromptFlowNodeResourceConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the prompt from Prompt management.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownoderesourceconfiguration.html#cfn-bedrock-flowversion-promptflownoderesourceconfiguration-promptarn
         */
        readonly promptArn: string;
    }
    /**
     * Contains configurations for a prompt defined inline in the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeinlineconfiguration.html
     */
    interface PromptFlowNodeInlineConfigurationProperty {
        /**
         * Contains inference configurations for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeinlineconfiguration.html#cfn-bedrock-flowversion-promptflownodeinlineconfiguration-inferenceconfiguration
         */
        readonly inferenceConfiguration?: cdk.IResolvable | CfnFlowVersion.PromptInferenceConfigurationProperty;
        /**
         * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to run inference with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeinlineconfiguration.html#cfn-bedrock-flowversion-promptflownodeinlineconfiguration-modelid
         */
        readonly modelId: string;
        /**
         * Contains a prompt and variables in the prompt that can be replaced with values at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeinlineconfiguration.html#cfn-bedrock-flowversion-promptflownodeinlineconfiguration-templateconfiguration
         */
        readonly templateConfiguration: cdk.IResolvable | CfnFlowVersion.PromptTemplateConfigurationProperty;
        /**
         * The type of prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeinlineconfiguration.html#cfn-bedrock-flowversion-promptflownodeinlineconfiguration-templatetype
         */
        readonly templateType: string;
    }
    /**
     * Contains the message for a prompt.
     *
     * For more information, see [Construct and store reusable prompts with Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-prompttemplateconfiguration.html
     */
    interface PromptTemplateConfigurationProperty {
        /**
         * Contains configurations for the text in a message for a prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-prompttemplateconfiguration.html#cfn-bedrock-flowversion-prompttemplateconfiguration-text
         */
        readonly text: cdk.IResolvable | CfnFlowVersion.TextPromptTemplateConfigurationProperty;
    }
    /**
     * Contains configurations for a text prompt template.
     *
     * To include a variable, enclose a word in double curly braces as in `{{variable}}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-textprompttemplateconfiguration.html
     */
    interface TextPromptTemplateConfigurationProperty {
        /**
         * An array of the variables in the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-textprompttemplateconfiguration.html#cfn-bedrock-flowversion-textprompttemplateconfiguration-inputvariables
         */
        readonly inputVariables?: Array<cdk.IResolvable | CfnFlowVersion.PromptInputVariableProperty> | cdk.IResolvable;
        /**
         * The message for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-textprompttemplateconfiguration.html#cfn-bedrock-flowversion-textprompttemplateconfiguration-text
         */
        readonly text: string;
    }
    /**
     * Contains information about a variable in the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptinputvariable.html
     */
    interface PromptInputVariableProperty {
        /**
         * The name of the variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptinputvariable.html#cfn-bedrock-flowversion-promptinputvariable-name
         */
        readonly name?: string;
    }
    /**
     * Contains inference configurations for the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptinferenceconfiguration.html
     */
    interface PromptInferenceConfigurationProperty {
        /**
         * Contains inference configurations for a text prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptinferenceconfiguration.html#cfn-bedrock-flowversion-promptinferenceconfiguration-text
         */
        readonly text: cdk.IResolvable | CfnFlowVersion.PromptModelInferenceConfigurationProperty;
    }
    /**
     * Contains inference configurations related to model inference for a prompt.
     *
     * For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptmodelinferenceconfiguration.html
     */
    interface PromptModelInferenceConfigurationProperty {
        /**
         * The maximum number of tokens to return in the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptmodelinferenceconfiguration.html#cfn-bedrock-flowversion-promptmodelinferenceconfiguration-maxtokens
         */
        readonly maxTokens?: number;
        /**
         * A list of strings that define sequences after which the model will stop generating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptmodelinferenceconfiguration.html#cfn-bedrock-flowversion-promptmodelinferenceconfiguration-stopsequences
         */
        readonly stopSequences?: Array<string>;
        /**
         * Controls the randomness of the response.
         *
         * Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptmodelinferenceconfiguration.html#cfn-bedrock-flowversion-promptmodelinferenceconfiguration-temperature
         */
        readonly temperature?: number;
        /**
         * The percentage of most-likely candidates that the model considers for the next token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptmodelinferenceconfiguration.html#cfn-bedrock-flowversion-promptmodelinferenceconfiguration-topp
         */
        readonly topP?: number;
    }
    /**
     * Contains configurations for a Lambda function node in the flow.
     *
     * You specify the Lambda function to invoke and the inputs into the function. The output is the response that is defined in the Lambda function. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lambdafunctionflownodeconfiguration.html
     */
    interface LambdaFunctionFlowNodeConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Lambda function to invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lambdafunctionflownodeconfiguration.html#cfn-bedrock-flowversion-lambdafunctionflownodeconfiguration-lambdaarn
         */
        readonly lambdaArn: string;
    }
    /**
     * Defines an agent node in your flow.
     *
     * You specify the agent to invoke at this point in the flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-agentflownodeconfiguration.html
     */
    interface AgentFlowNodeConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the alias of the agent to invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-agentflownodeconfiguration.html#cfn-bedrock-flowversion-agentflownodeconfiguration-agentaliasarn
         */
        readonly agentAliasArn: string;
    }
    /**
     * Contains configurations for a Storage node in a flow.
     *
     * This node stores the input in an Amazon S3 location that you specify.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodeconfiguration.html
     */
    interface StorageFlowNodeConfigurationProperty {
        /**
         * Contains configurations for the service to use for storing the input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodeconfiguration.html#cfn-bedrock-flowversion-storageflownodeconfiguration-serviceconfiguration
         */
        readonly serviceConfiguration: cdk.IResolvable | CfnFlowVersion.StorageFlowNodeServiceConfigurationProperty;
    }
    /**
     * Contains configurations for the service to use for storing the input into the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodeserviceconfiguration.html
     */
    interface StorageFlowNodeServiceConfigurationProperty {
        /**
         * Contains configurations for the Amazon S3 location in which to store the input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodeserviceconfiguration.html#cfn-bedrock-flowversion-storageflownodeserviceconfiguration-s3
         */
        readonly s3?: cdk.IResolvable | CfnFlowVersion.StorageFlowNodeS3ConfigurationProperty;
    }
    /**
     * Contains configurations for the Amazon S3 location in which to store the input into the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodes3configuration.html
     */
    interface StorageFlowNodeS3ConfigurationProperty {
        /**
         * The name of the Amazon S3 bucket in which to store the input into the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodes3configuration.html#cfn-bedrock-flowversion-storageflownodes3configuration-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * Contains configurations for a Retrieval node in a flow.
     *
     * This node retrieves data from the Amazon S3 location that you specify and returns it as the output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodeconfiguration.html
     */
    interface RetrievalFlowNodeConfigurationProperty {
        /**
         * Contains configurations for the service to use for retrieving data to return as the output from the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodeconfiguration.html#cfn-bedrock-flowversion-retrievalflownodeconfiguration-serviceconfiguration
         */
        readonly serviceConfiguration: cdk.IResolvable | CfnFlowVersion.RetrievalFlowNodeServiceConfigurationProperty;
    }
    /**
     * Contains configurations for the service to use for retrieving data to return as the output from the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodeserviceconfiguration.html
     */
    interface RetrievalFlowNodeServiceConfigurationProperty {
        /**
         * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodeserviceconfiguration.html#cfn-bedrock-flowversion-retrievalflownodeserviceconfiguration-s3
         */
        readonly s3?: cdk.IResolvable | CfnFlowVersion.RetrievalFlowNodeS3ConfigurationProperty;
    }
    /**
     * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodes3configuration.html
     */
    interface RetrievalFlowNodeS3ConfigurationProperty {
        /**
         * The name of the Amazon S3 bucket from which to retrieve data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodes3configuration.html#cfn-bedrock-flowversion-retrievalflownodes3configuration-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * Contains configurations for an input to a node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeinput.html
     */
    interface FlowNodeInputProperty {
        /**
         * An expression that formats the input for the node.
         *
         * For an explanation of how to create expressions, see [Expressions in Prompt flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-expressions.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeinput.html#cfn-bedrock-flowversion-flownodeinput-expression
         */
        readonly expression: string;
        /**
         * A name for the input that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeinput.html#cfn-bedrock-flowversion-flownodeinput-name
         */
        readonly name: string;
        /**
         * The data type of the input.
         *
         * If the input doesn't match this type at runtime, a validation error will be thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeinput.html#cfn-bedrock-flowversion-flownodeinput-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for an output from a node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeoutput.html
     */
    interface FlowNodeOutputProperty {
        /**
         * A name for the output that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeoutput.html#cfn-bedrock-flowversion-flownodeoutput-name
         */
        readonly name: string;
        /**
         * The data type of the output.
         *
         * If the output doesn't match this type at runtime, a validation error will be thrown.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeoutput.html#cfn-bedrock-flowversion-flownodeoutput-type
         */
        readonly type: string;
    }
    /**
     * Contains information about a connection between two nodes in the flow.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html
     */
    interface FlowConnectionProperty {
        /**
         * The configuration of the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html#cfn-bedrock-flowversion-flowconnection-configuration
         */
        readonly configuration?: CfnFlowVersion.FlowConnectionConfigurationProperty | cdk.IResolvable;
        /**
         * A name for the connection that you can reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html#cfn-bedrock-flowversion-flowconnection-name
         */
        readonly name: string;
        /**
         * The node that the connection starts at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html#cfn-bedrock-flowversion-flowconnection-source
         */
        readonly source: string;
        /**
         * The node that the connection ends at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html#cfn-bedrock-flowversion-flowconnection-target
         */
        readonly target: string;
        /**
         * Whether the source node that the connection begins from is a condition node ( `Conditional` ) or not ( `Data` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html#cfn-bedrock-flowversion-flowconnection-type
         */
        readonly type: string;
    }
    /**
     * The configuration of the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnectionconfiguration.html
     */
    interface FlowConnectionConfigurationProperty {
        /**
         * The configuration of a connection originating from a Condition node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnectionconfiguration.html#cfn-bedrock-flowversion-flowconnectionconfiguration-conditional
         */
        readonly conditional?: CfnFlowVersion.FlowConditionalConnectionConfigurationProperty | cdk.IResolvable;
        /**
         * The configuration of a connection originating from a node that isn't a Condition node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnectionconfiguration.html#cfn-bedrock-flowversion-flowconnectionconfiguration-data
         */
        readonly data?: CfnFlowVersion.FlowDataConnectionConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration of a connection originating from a node that isn't a Condition node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdataconnectionconfiguration.html
     */
    interface FlowDataConnectionConfigurationProperty {
        /**
         * The name of the output in the source node that the connection begins from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdataconnectionconfiguration.html#cfn-bedrock-flowversion-flowdataconnectionconfiguration-sourceoutput
         */
        readonly sourceOutput: string;
        /**
         * The name of the input in the target node that the connection ends at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdataconnectionconfiguration.html#cfn-bedrock-flowversion-flowdataconnectionconfiguration-targetinput
         */
        readonly targetInput: string;
    }
    /**
     * The configuration of a connection between a condition node and another node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconditionalconnectionconfiguration.html
     */
    interface FlowConditionalConnectionConfigurationProperty {
        /**
         * The condition that triggers this connection.
         *
         * For more information about how to write conditions, see the *Condition* node type in the [Node types](https://docs.aws.amazon.com/bedrock/latest/userguide/node-types.html) topic in the Amazon Bedrock User Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconditionalconnectionconfiguration.html#cfn-bedrock-flowversion-flowconditionalconnectionconfiguration-condition
         */
        readonly condition: string;
    }
}
/**
 * Properties for defining a `CfnFlowVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html
 */
export interface CfnFlowVersionProps {
    /**
     * The description of the flow version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html#cfn-bedrock-flowversion-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the flow that the version belongs to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html#cfn-bedrock-flowversion-flowarn
     */
    readonly flowArn: string;
}
/**
 * Creates a guardrail to block topics and to implement safeguards for your generative AI applications.
 *
 * You can configure the following policies in a guardrail to avoid undesirable and harmful content, filter out denied topics and words, and remove sensitive information for privacy protection.
 *
 * - *Content filters* - Adjust filter strengths to block input prompts or model responses containing harmful content.
 * - *Denied topics* - Define a set of topics that are undesirable in the context of your application. These topics will be blocked if detected in user queries or model responses.
 * - *Word filters* - Configure filters to block undesirable words, phrases, and profanity. Such words can include offensive terms, competitor names etc.
 * - *Sensitive information filters* - Block or mask sensitive information such as personally identifiable information (PII) or custom regex in user inputs and model responses.
 *
 * In addition to the above policies, you can also configure the messages to be returned to the user if a user input or model response is in violation of the policies defined in the guardrail.
 *
 * For more information, see [Amazon Bedrock Guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) in the *Amazon Bedrock User Guide* .
 *
 * @cloudformationResource AWS::Bedrock::Guardrail
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html
 */
export declare class CfnGuardrail extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGuardrail from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGuardrail;
    /**
     * The date and time at which the guardrail was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Appears if the `status` of the guardrail is `FAILED` . A list of recommendations to carry out before retrying the request.
     *
     * @cloudformationAttribute FailureRecommendations
     */
    readonly attrFailureRecommendations: Array<string>;
    /**
     * The ARN of the guardrail.
     *
     * @cloudformationAttribute GuardrailArn
     */
    readonly attrGuardrailArn: string;
    /**
     * The unique identifier of the guardrail.
     *
     * @cloudformationAttribute GuardrailId
     */
    readonly attrGuardrailId: string;
    /**
     * The status of the guardrail.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Appears if the `status` is `FAILED` . A list of reasons for why the guardrail failed to be created, updated, versioned, or deleted.
     *
     * @cloudformationAttribute StatusReasons
     */
    readonly attrStatusReasons: Array<string>;
    /**
     * The date and time at which the guardrail was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The version of the guardrail that was created. This value will always be `DRAFT` .
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * The message to return when the guardrail blocks a prompt.
     */
    blockedInputMessaging: string;
    /**
     * The message to return when the guardrail blocks a model response.
     */
    blockedOutputsMessaging: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The content filter policies to configure for the guardrail.
     */
    contentPolicyConfig?: CfnGuardrail.ContentPolicyConfigProperty | cdk.IResolvable;
    /**
     * Contextual grounding policy config for a guardrail.
     */
    contextualGroundingPolicyConfig?: CfnGuardrail.ContextualGroundingPolicyConfigProperty | cdk.IResolvable;
    /**
     * A description of the guardrail.
     */
    description?: string;
    /**
     * The ARN of the AWS KMS key that you use to encrypt the guardrail.
     */
    kmsKeyArn?: string;
    /**
     * The name of the guardrail.
     */
    name: string;
    /**
     * The sensitive information policy to configure for the guardrail.
     */
    sensitiveInformationPolicyConfig?: cdk.IResolvable | CfnGuardrail.SensitiveInformationPolicyConfigProperty;
    /**
     * The tags that you want to attach to the guardrail.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The topic policies to configure for the guardrail.
     */
    topicPolicyConfig?: cdk.IResolvable | CfnGuardrail.TopicPolicyConfigProperty;
    /**
     * The word policy you configure for the guardrail.
     */
    wordPolicyConfig?: cdk.IResolvable | CfnGuardrail.WordPolicyConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGuardrailProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGuardrail {
    /**
     * Contains details about how to handle harmful content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentpolicyconfig.html
     */
    interface ContentPolicyConfigProperty {
        /**
         * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentpolicyconfig.html#cfn-bedrock-guardrail-contentpolicyconfig-filtersconfig
         */
        readonly filtersConfig: Array<CfnGuardrail.ContentFilterConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Contains filter strengths for harmful content.
     *
     * Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.
     *
     * - *Hate* – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).
     * - *Insults* – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.
     * - *Sexual* – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.
     * - *Violence* – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.
     *
     * Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as *Hate* with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as *Hate* with HIGH confidence, *Insults* with LOW confidence, *Sexual* with NONE confidence, and *Violence* with MEDIUM confidence.
     *
     * For more information, see [Guardrails content filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html
     */
    interface ContentFilterConfigProperty {
        /**
         * The strength of the content filter to apply to prompts.
         *
         * As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html#cfn-bedrock-guardrail-contentfilterconfig-inputstrength
         */
        readonly inputStrength: string;
        /**
         * The strength of the content filter to apply to model responses.
         *
         * As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html#cfn-bedrock-guardrail-contentfilterconfig-outputstrength
         */
        readonly outputStrength: string;
        /**
         * The harmful category that the content filter is applied to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html#cfn-bedrock-guardrail-contentfilterconfig-type
         */
        readonly type: string;
    }
    /**
     * The policy configuration details for the guardrails contextual grounding policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingpolicyconfig.html
     */
    interface ContextualGroundingPolicyConfigProperty {
        /**
         * List of contextual grounding filter configs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingpolicyconfig.html#cfn-bedrock-guardrail-contextualgroundingpolicyconfig-filtersconfig
         */
        readonly filtersConfig: Array<CfnGuardrail.ContextualGroundingFilterConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The filter configuration details for the guardrails contextual grounding filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingfilterconfig.html
     */
    interface ContextualGroundingFilterConfigProperty {
        /**
         * The threshold details for the guardrails contextual grounding filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingfilterconfig.html#cfn-bedrock-guardrail-contextualgroundingfilterconfig-threshold
         */
        readonly threshold: number;
        /**
         * The filter details for the guardrails contextual grounding filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingfilterconfig.html#cfn-bedrock-guardrail-contextualgroundingfilterconfig-type
         */
        readonly type: string;
    }
    /**
     * Contains details about PII entities and regular expressions to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html
     */
    interface SensitiveInformationPolicyConfigProperty {
        /**
         * A list of PII entities to configure to the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig-piientitiesconfig
         */
        readonly piiEntitiesConfig?: Array<cdk.IResolvable | CfnGuardrail.PiiEntityConfigProperty> | cdk.IResolvable;
        /**
         * A list of regular expressions to configure to the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig-regexesconfig
         */
        readonly regexesConfig?: Array<cdk.IResolvable | CfnGuardrail.RegexConfigProperty> | cdk.IResolvable;
    }
    /**
     * The PII entity to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html
     */
    interface PiiEntityConfigProperty {
        /**
         * Configure guardrail action when the PII entity is detected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html#cfn-bedrock-guardrail-piientityconfig-action
         */
        readonly action: string;
        /**
         * Configure guardrail type when the PII entity is detected.
         *
         * The following PIIs are used to block or mask sensitive information:
         *
         * - *General*
         *
         * - *ADDRESS*
         *
         * A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12, Building 123". An address can include information such as the street, building, location, city, state, country, county, zip code, precinct, and neighborhood.
         * - *AGE*
         *
         * An individual's age, including the quantity and unit of time. For example, in the phrase "I am 40 years old," Guardrails recognizes "40 years" as an age.
         * - *NAME*
         *
         * An individual's name. This entity type does not include titles, such as Dr., Mr., Mrs., or Miss. guardrails doesn't apply this entity type to names that are part of organizations or addresses. For example, guardrails recognizes the "John Doe Organization" as an organization, and it recognizes "Jane Doe Street" as an address.
         * - *EMAIL*
         *
         * An email address, such as *marymajor@email.com* .
         * - *PHONE*
         *
         * A phone number. This entity type also includes fax and pager numbers.
         * - *USERNAME*
         *
         * A user name that identifies an account, such as a login name, screen name, nick name, or handle.
         * - *PASSWORD*
         *
         * An alphanumeric string that is used as a password, such as "* *very20special#pass** ".
         * - *DRIVER_ID*
         *
         * The number assigned to a driver's license, which is an official document permitting an individual to operate one or more motorized vehicles on a public road. A driver's license number consists of alphanumeric characters.
         * - *LICENSE_PLATE*
         *
         * A license plate for a vehicle is issued by the state or country where the vehicle is registered. The format for passenger vehicles is typically five to eight digits, consisting of upper-case letters and numbers. The format varies depending on the location of the issuing state or country.
         * - *VEHICLE_IDENTIFICATION_NUMBER*
         *
         * A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content and format are defined in the *ISO 3779* specification. Each country has specific codes and formats for VINs.
         * - *Finance*
         *
         * - *CREDIT_DEBIT_CARD_CVV*
         *
         * A three-digit card verification code (CVV) that is present on VISA, MasterCard, and Discover credit and debit cards. For American Express credit or debit cards, the CVV is a four-digit numeric code.
         * - *CREDIT_DEBIT_CARD_EXPIRY*
         *
         * The expiration date for a credit or debit card. This number is usually four digits long and is often formatted as *month/year* or *MM/YY* . Guardrails recognizes expiration dates such as *01/21* , *01/2021* , and *Jan 2021* .
         * - *CREDIT_DEBIT_CARD_NUMBER*
         *
         * The number for a credit or debit card. These numbers can vary from 13 to 16 digits in length. However, Amazon Comprehend also recognizes credit or debit card numbers when only the last four digits are present.
         * - *PIN*
         *
         * A four-digit personal identification number (PIN) with which you can access your bank account.
         * - *INTERNATIONAL_BANK_ACCOUNT_NUMBER*
         *
         * An International Bank Account Number has specific formats in each country. For more information, see [www.iban.com/structure](https://docs.aws.amazon.com/https://www.iban.com/structure) .
         * - *SWIFT_CODE*
         *
         * A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a particular bank or branch. Banks use these codes for money transfers such as international wire transfers.
         *
         * SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the head or primary office.
         * - *IT*
         *
         * - *IP_ADDRESS*
         *
         * An IPv4 address, such as *198.51.100.0* .
         * - *MAC_ADDRESS*
         *
         * A *media access control* (MAC) address is a unique identifier assigned to a network interface controller (NIC).
         * - *URL*
         *
         * A web address, such as *www.example.com* .
         * - *AWS_ACCESS_KEY*
         *
         * A unique identifier that's associated with a secret access key; you use the access key ID and secret access key to sign programmatic AWS requests cryptographically.
         * - *AWS_SECRET_KEY*
         *
         * A unique identifier that's associated with an access key. You use the access key ID and secret access key to sign programmatic AWS requests cryptographically.
         * - *USA specific*
         *
         * - *US_BANK_ACCOUNT_NUMBER*
         *
         * A US bank account number, which is typically 10 to 12 digits long.
         * - *US_BANK_ROUTING_NUMBER*
         *
         * A US bank account routing number. These are typically nine digits long,
         * - *US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER*
         *
         * A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be formatted with a space or a dash after the third and forth digits.
         * - *US_PASSPORT_NUMBER*
         *
         * A US passport number. Passport numbers range from six to nine alphanumeric characters.
         * - *US_SOCIAL_SECURITY_NUMBER*
         *
         * A US Social Security Number (SSN) is a nine-digit number that is issued to US citizens, permanent residents, and temporary working residents.
         * - *Canada specific*
         *
         * - *CA_HEALTH_NUMBER*
         *
         * A Canadian Health Service Number is a 10-digit unique identifier, required for individuals to access healthcare benefits.
         * - *CA_SOCIAL_INSURANCE_NUMBER*
         *
         * A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier, required for individuals to access government programs and benefits.
         *
         * The SIN is formatted as three groups of three digits, such as *123-456-789* . A SIN can be validated through a simple check-digit process called the [Luhn algorithm](https://docs.aws.amazon.com/https://www.wikipedia.org/wiki/Luhn_algorithm) .
         * - *UK Specific*
         *
         * - *UK_NATIONAL_HEALTH_SERVICE_NUMBER*
         *
         * A UK National Health Service Number is a 10-17 digit number, such as *485 777 3456* . The current system formats the 10-digit number with spaces after the third and sixth digits. The final digit is an error-detecting checksum.
         * - *UK_NATIONAL_INSURANCE_NUMBER*
         *
         * A UK National Insurance Number (NINO) provides individuals with access to National Insurance (social security) benefits. It is also used for some purposes in the UK tax system.
         *
         * The number is nine digits long and starts with two letters, followed by six numbers and one letter. A NINO can be formatted with a space or a dash after the two letters and after the second, forth, and sixth digits.
         * - *UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER*
         *
         * A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business.
         * - *Custom*
         *
         * - *Regex filter* - You can use a regular expressions to define patterns for a guardrail to recognize and act upon such as serial number, booking ID etc..
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html#cfn-bedrock-guardrail-piientityconfig-type
         */
        readonly type: string;
    }
    /**
     * The regular expression to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html
     */
    interface RegexConfigProperty {
        /**
         * The guardrail action to configure when matching regular expression is detected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-action
         */
        readonly action: string;
        /**
         * The description of the regular expression to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-description
         */
        readonly description?: string;
        /**
         * The name of the regular expression to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-name
         */
        readonly name: string;
        /**
         * The regular expression pattern to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html#cfn-bedrock-guardrail-regexconfig-pattern
         */
        readonly pattern: string;
    }
    /**
     * Contains details about topics that the guardrail should identify and deny.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicpolicyconfig.html
     */
    interface TopicPolicyConfigProperty {
        /**
         * A list of policies related to topics that the guardrail should deny.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicpolicyconfig.html#cfn-bedrock-guardrail-topicpolicyconfig-topicsconfig
         */
        readonly topicsConfig: Array<cdk.IResolvable | CfnGuardrail.TopicConfigProperty> | cdk.IResolvable;
    }
    /**
     * Details about topics for the guardrail to identify and deny.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html
     */
    interface TopicConfigProperty {
        /**
         * A definition of the topic to deny.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-definition
         */
        readonly definition: string;
        /**
         * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-examples
         */
        readonly examples?: Array<string>;
        /**
         * The name of the topic to deny.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-name
         */
        readonly name: string;
        /**
         * Specifies to deny the topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html#cfn-bedrock-guardrail-topicconfig-type
         */
        readonly type: string;
    }
    /**
     * Contains details about the word policy to configured for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html
     */
    interface WordPolicyConfigProperty {
        /**
         * A list of managed words to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html#cfn-bedrock-guardrail-wordpolicyconfig-managedwordlistsconfig
         */
        readonly managedWordListsConfig?: Array<cdk.IResolvable | CfnGuardrail.ManagedWordsConfigProperty> | cdk.IResolvable;
        /**
         * A list of words to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html#cfn-bedrock-guardrail-wordpolicyconfig-wordsconfig
         */
        readonly wordsConfig?: Array<cdk.IResolvable | CfnGuardrail.WordConfigProperty> | cdk.IResolvable;
    }
    /**
     * A word to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordconfig.html
     */
    interface WordConfigProperty {
        /**
         * Text of the word configured for the guardrail to block.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordconfig.html#cfn-bedrock-guardrail-wordconfig-text
         */
        readonly text: string;
    }
    /**
     * The managed word list to configure for the guardrail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-managedwordsconfig.html
     */
    interface ManagedWordsConfigProperty {
        /**
         * The managed word type to configure for the guardrail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-managedwordsconfig.html#cfn-bedrock-guardrail-managedwordsconfig-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnGuardrail`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html
 */
export interface CfnGuardrailProps {
    /**
     * The message to return when the guardrail blocks a prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-blockedinputmessaging
     */
    readonly blockedInputMessaging: string;
    /**
     * The message to return when the guardrail blocks a model response.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-blockedoutputsmessaging
     */
    readonly blockedOutputsMessaging: string;
    /**
     * The content filter policies to configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentpolicyconfig
     */
    readonly contentPolicyConfig?: CfnGuardrail.ContentPolicyConfigProperty | cdk.IResolvable;
    /**
     * Contextual grounding policy config for a guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contextualgroundingpolicyconfig
     */
    readonly contextualGroundingPolicyConfig?: CfnGuardrail.ContextualGroundingPolicyConfigProperty | cdk.IResolvable;
    /**
     * A description of the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-description
     */
    readonly description?: string;
    /**
     * The ARN of the AWS KMS key that you use to encrypt the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The name of the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-name
     */
    readonly name: string;
    /**
     * The sensitive information policy to configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig
     */
    readonly sensitiveInformationPolicyConfig?: cdk.IResolvable | CfnGuardrail.SensitiveInformationPolicyConfigProperty;
    /**
     * The tags that you want to attach to the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The topic policies to configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicpolicyconfig
     */
    readonly topicPolicyConfig?: cdk.IResolvable | CfnGuardrail.TopicPolicyConfigProperty;
    /**
     * The word policy you configure for the guardrail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-wordpolicyconfig
     */
    readonly wordPolicyConfig?: cdk.IResolvable | CfnGuardrail.WordPolicyConfigProperty;
}
/**
 * Creates a version of the guardrail.
 *
 * Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version.
 *
 * @cloudformationResource AWS::Bedrock::GuardrailVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html
 */
export declare class CfnGuardrailVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGuardrailVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGuardrailVersion;
    /**
     * The ARN of the guardrail.
     *
     * @cloudformationAttribute GuardrailArn
     */
    readonly attrGuardrailArn: string;
    /**
     * The unique identifier of the guardrail.
     *
     * @cloudformationAttribute GuardrailId
     */
    readonly attrGuardrailId: string;
    /**
     * The version of the guardrail.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * A description of the guardrail version.
     */
    description?: string;
    /**
     * The unique identifier of the guardrail.
     */
    guardrailIdentifier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGuardrailVersionProps);
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
 * Properties for defining a `CfnGuardrailVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html
 */
export interface CfnGuardrailVersionProps {
    /**
     * A description of the guardrail version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html#cfn-bedrock-guardrailversion-description
     */
    readonly description?: string;
    /**
     * The unique identifier of the guardrail.
     *
     * This can be an ID or the ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html#cfn-bedrock-guardrailversion-guardrailidentifier
     */
    readonly guardrailIdentifier: string;
}
/**
 * Specifies a knowledge base as a resource in a top-level template. Minimally, you must specify the following properties:.
 *
 * - Name – Specify a name for the knowledge base.
 * - RoleArn – Specify the Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base. For more information, see [Create a service role for Knowledge base for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-permissions.html) .
 * - KnowledgeBaseConfiguration – Specify the embeddings configuration of the knowledge base. The following sub-properties are required:
 *
 * - Type – Specify the value `VECTOR` .
 * - StorageConfiguration – Specify information about the vector store in which the data source is stored. The following sub-properties are required:
 *
 * - Type – Specify the vector store service that you are using.
 *
 * > Redis Enterprise Cloud vector stores are currently unsupported in AWS CloudFormation .
 *
 * For more information about using knowledge bases in Amazon Bedrock , see [Knowledge base for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) .
 *
 * See the *Properties* section below for descriptions of both the required and optional properties.
 *
 * @cloudformationResource AWS::Bedrock::KnowledgeBase
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html
 */
export declare class CfnKnowledgeBase extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnKnowledgeBase from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnKnowledgeBase;
    /**
     * The time the knowledge base was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * A list of reasons that the API operation on the knowledge base failed.
     *
     * @cloudformationAttribute FailureReasons
     */
    readonly attrFailureReasons: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     *
     * @cloudformationAttribute KnowledgeBaseArn
     */
    readonly attrKnowledgeBaseArn: string;
    /**
     * The unique identifier for a knowledge base associated with the inline agent.
     *
     * @cloudformationAttribute KnowledgeBaseId
     */
    readonly attrKnowledgeBaseId: string;
    /**
     * The status of the knowledge base.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The time the knowledge base was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the knowledge base associated with the inline agent.
     */
    description?: string;
    /**
     * Contains details about the embeddings configuration of the knowledge base.
     */
    knowledgeBaseConfiguration: cdk.IResolvable | CfnKnowledgeBase.KnowledgeBaseConfigurationProperty;
    /**
     * The name of the knowledge base.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     */
    roleArn: string;
    /**
     * Contains details about the storage configuration of the knowledge base.
     */
    storageConfiguration?: cdk.IResolvable | CfnKnowledgeBase.StorageConfigurationProperty;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnKnowledgeBaseProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnKnowledgeBase {
    /**
     * Configurations to apply to a knowledge base attached to the agent during query.
     *
     * For more information, see [Knowledge base retrieval configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html#session-state-kb) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html
     */
    interface KnowledgeBaseConfigurationProperty {
        /**
         * Settings for an Amazon Kendra knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-kendraknowledgebaseconfiguration
         */
        readonly kendraKnowledgeBaseConfiguration?: cdk.IResolvable | CfnKnowledgeBase.KendraKnowledgeBaseConfigurationProperty;
        /**
         * Specifies configurations for a knowledge base connected to an SQL database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-sqlknowledgebaseconfiguration
         */
        readonly sqlKnowledgeBaseConfiguration?: cdk.IResolvable | CfnKnowledgeBase.SqlKnowledgeBaseConfigurationProperty;
        /**
         * The type of data that the data source is converted into for the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-type
         */
        readonly type: string;
        /**
         * Contains details about the model that's used to convert the data source into vector embeddings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-vectorknowledgebaseconfiguration
         */
        readonly vectorKnowledgeBaseConfiguration?: cdk.IResolvable | CfnKnowledgeBase.VectorKnowledgeBaseConfigurationProperty;
    }
    /**
     * Contains details about the model used to create vector embeddings for the knowledge base.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html
     */
    interface VectorKnowledgeBaseConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-embeddingmodelarn
         */
        readonly embeddingModelArn: string;
        /**
         * The embeddings model configuration details for the vector model used in Knowledge Base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-embeddingmodelconfiguration
         */
        readonly embeddingModelConfiguration?: CfnKnowledgeBase.EmbeddingModelConfigurationProperty | cdk.IResolvable;
        /**
         * If you include multimodal data from your data source, use this object to specify configurations for the storage location of the images extracted from your documents.
         *
         * These images can be retrieved and returned to the end user. They can also be used in generation when using [RetrieveAndGenerate](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-supplementaldatastorageconfiguration
         */
        readonly supplementalDataStorageConfiguration?: cdk.IResolvable | CfnKnowledgeBase.SupplementalDataStorageConfigurationProperty;
    }
    /**
     * The configuration details for the embeddings model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-embeddingmodelconfiguration.html
     */
    interface EmbeddingModelConfigurationProperty {
        /**
         * The vector configuration details on the Bedrock embeddings model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-embeddingmodelconfiguration.html#cfn-bedrock-knowledgebase-embeddingmodelconfiguration-bedrockembeddingmodelconfiguration
         */
        readonly bedrockEmbeddingModelConfiguration?: CfnKnowledgeBase.BedrockEmbeddingModelConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The vector configuration details for the Bedrock embeddings model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-bedrockembeddingmodelconfiguration.html
     */
    interface BedrockEmbeddingModelConfigurationProperty {
        /**
         * The dimensions details for the vector configuration used on the Bedrock embeddings model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-bedrockembeddingmodelconfiguration.html#cfn-bedrock-knowledgebase-bedrockembeddingmodelconfiguration-dimensions
         */
        readonly dimensions?: number;
        /**
         * The data type for the vectors when using a model to convert text into vector embeddings.
         *
         * The model must support the specified data type for vector embeddings. Floating-point (float32) is the default data type, and is supported by most models for vector embeddings. See [Supported embeddings models](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html) for information on the available models and their vector data types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-bedrockembeddingmodelconfiguration.html#cfn-bedrock-knowledgebase-bedrockembeddingmodelconfiguration-embeddingdatatype
         */
        readonly embeddingDataType?: string;
    }
    /**
     * Specifies configurations for the storage location of the images extracted from multimodal documents in your data source.
     *
     * These images can be retrieved and returned to the end user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastorageconfiguration.html
     */
    interface SupplementalDataStorageConfigurationProperty {
        /**
         * List of supplemental data storage locations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastorageconfiguration.html#cfn-bedrock-knowledgebase-supplementaldatastorageconfiguration-supplementaldatastoragelocations
         */
        readonly supplementalDataStorageLocations: Array<cdk.IResolvable | CfnKnowledgeBase.SupplementalDataStorageLocationProperty> | cdk.IResolvable;
    }
    /**
     * Contains information about a storage location for images extracted from multimodal documents in your data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastoragelocation.html
     */
    interface SupplementalDataStorageLocationProperty {
        /**
         * Contains information about the Amazon S3 location for the extracted images.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastoragelocation.html#cfn-bedrock-knowledgebase-supplementaldatastoragelocation-s3location
         */
        readonly s3Location?: cdk.IResolvable | CfnKnowledgeBase.S3LocationProperty;
        /**
         * Supplemental data storage location type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastoragelocation.html#cfn-bedrock-knowledgebase-supplementaldatastoragelocation-supplementaldatastoragelocationtype
         */
        readonly supplementalDataStorageLocationType: string;
    }
    /**
     * A storage location in an S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-s3location.html
     */
    interface S3LocationProperty {
        /**
         * An object URI starting with `s3://` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-s3location.html#cfn-bedrock-knowledgebase-s3location-uri
         */
        readonly uri: string;
    }
    /**
     * Settings for an Amazon Kendra knowledge base.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-kendraknowledgebaseconfiguration.html
     */
    interface KendraKnowledgeBaseConfigurationProperty {
        /**
         * The ARN of the Amazon Kendra index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-kendraknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-kendraknowledgebaseconfiguration-kendraindexarn
         */
        readonly kendraIndexArn: string;
    }
    /**
     * Contains configurations for a knowledge base connected to an SQL database.
     *
     * Specify the SQL database type in the `type` field and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-sqlknowledgebaseconfiguration.html
     */
    interface SqlKnowledgeBaseConfigurationProperty {
        /**
         * Specifies configurations for a knowledge base connected to an Amazon Redshift database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-sqlknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-sqlknowledgebaseconfiguration-redshiftconfiguration
         */
        readonly redshiftConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RedshiftConfigurationProperty;
        /**
         * The type of SQL database to connect to the knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-sqlknowledgebaseconfiguration.html#cfn-bedrock-knowledgebase-sqlknowledgebaseconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for an Amazon Redshift database.
     *
     * For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftconfiguration.html
     */
    interface RedshiftConfigurationProperty {
        /**
         * Specifies configurations for an Amazon Redshift query engine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftconfiguration.html#cfn-bedrock-knowledgebase-redshiftconfiguration-queryengineconfiguration
         */
        readonly queryEngineConfiguration: cdk.IResolvable | CfnKnowledgeBase.RedshiftQueryEngineConfigurationProperty;
        /**
         * Specifies configurations for generating queries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftconfiguration.html#cfn-bedrock-knowledgebase-redshiftconfiguration-querygenerationconfiguration
         */
        readonly queryGenerationConfiguration?: cdk.IResolvable | CfnKnowledgeBase.QueryGenerationConfigurationProperty;
        /**
         * Specifies configurations for Amazon Redshift database storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftconfiguration.html#cfn-bedrock-knowledgebase-redshiftconfiguration-storageconfigurations
         */
        readonly storageConfigurations: Array<cdk.IResolvable | CfnKnowledgeBase.RedshiftQueryEngineStorageConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * Contains configurations for Amazon Redshift data storage.
     *
     * Specify the data storage service to use in the `type` field and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration.html
     */
    interface RedshiftQueryEngineStorageConfigurationProperty {
        /**
         * Specifies configurations for storage in AWS Glue Data Catalog.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration-awsdatacatalogconfiguration
         */
        readonly awsDataCatalogConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty;
        /**
         * Specifies configurations for storage in Amazon Redshift.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration-redshiftconfiguration
         */
        readonly redshiftConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RedshiftQueryEngineRedshiftStorageConfigurationProperty;
        /**
         * The data storage service to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for storage in AWS Glue Data Catalog.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineawsdatacatalogstorageconfiguration.html
     */
    interface RedshiftQueryEngineAwsDataCatalogStorageConfigurationProperty {
        /**
         * A list of names of the tables to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineawsdatacatalogstorageconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryengineawsdatacatalogstorageconfiguration-tablenames
         */
        readonly tableNames: Array<string>;
    }
    /**
     * Contains configurations for storage in Amazon Redshift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineredshiftstorageconfiguration.html
     */
    interface RedshiftQueryEngineRedshiftStorageConfigurationProperty {
        /**
         * The name of the Amazon Redshift database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineredshiftstorageconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryengineredshiftstorageconfiguration-databasename
         */
        readonly databaseName: string;
    }
    /**
     * Contains configurations for an Amazon Redshift query engine.
     *
     * Specify the type of query engine in `type` and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineconfiguration.html
     */
    interface RedshiftQueryEngineConfigurationProperty {
        /**
         * Specifies configurations for a provisioned Amazon Redshift query engine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryengineconfiguration-provisionedconfiguration
         */
        readonly provisionedConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RedshiftProvisionedConfigurationProperty;
        /**
         * Specifies configurations for a serverless Amazon Redshift query engine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryengineconfiguration-serverlessconfiguration
         */
        readonly serverlessConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RedshiftServerlessConfigurationProperty;
        /**
         * The type of query engine.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineconfiguration.html#cfn-bedrock-knowledgebase-redshiftqueryengineconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations for authentication to Amazon Redshift Serverless.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessconfiguration.html
     */
    interface RedshiftServerlessConfigurationProperty {
        /**
         * Specifies configurations for authentication to an Amazon Redshift provisioned data warehouse.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessconfiguration.html#cfn-bedrock-knowledgebase-redshiftserverlessconfiguration-authconfiguration
         */
        readonly authConfiguration: cdk.IResolvable | CfnKnowledgeBase.RedshiftServerlessAuthConfigurationProperty;
        /**
         * The ARN of the Amazon Redshift workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessconfiguration.html#cfn-bedrock-knowledgebase-redshiftserverlessconfiguration-workgrouparn
         */
        readonly workgroupArn: string;
    }
    /**
     * Specifies configurations for authentication to a Redshift Serverless.
     *
     * Specify the type of authentication to use in the `type` field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessauthconfiguration.html
     */
    interface RedshiftServerlessAuthConfigurationProperty {
        /**
         * The type of authentication to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessauthconfiguration.html#cfn-bedrock-knowledgebase-redshiftserverlessauthconfiguration-type
         */
        readonly type: string;
        /**
         * The ARN of an Secrets Manager secret for authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessauthconfiguration.html#cfn-bedrock-knowledgebase-redshiftserverlessauthconfiguration-usernamepasswordsecretarn
         */
        readonly usernamePasswordSecretArn?: string;
    }
    /**
     * Contains configurations for a provisioned Amazon Redshift query engine.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedconfiguration.html
     */
    interface RedshiftProvisionedConfigurationProperty {
        /**
         * Specifies configurations for authentication to Amazon Redshift.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedconfiguration.html#cfn-bedrock-knowledgebase-redshiftprovisionedconfiguration-authconfiguration
         */
        readonly authConfiguration: cdk.IResolvable | CfnKnowledgeBase.RedshiftProvisionedAuthConfigurationProperty;
        /**
         * The ID of the Amazon Redshift cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedconfiguration.html#cfn-bedrock-knowledgebase-redshiftprovisionedconfiguration-clusteridentifier
         */
        readonly clusterIdentifier: string;
    }
    /**
     * Contains configurations for authentication to an Amazon Redshift provisioned data warehouse.
     *
     * Specify the type of authentication to use in the `type` field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedauthconfiguration.html
     */
    interface RedshiftProvisionedAuthConfigurationProperty {
        /**
         * The database username for authentication to an Amazon Redshift provisioned data warehouse.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedauthconfiguration.html#cfn-bedrock-knowledgebase-redshiftprovisionedauthconfiguration-databaseuser
         */
        readonly databaseUser?: string;
        /**
         * The type of authentication to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedauthconfiguration.html#cfn-bedrock-knowledgebase-redshiftprovisionedauthconfiguration-type
         */
        readonly type: string;
        /**
         * The ARN of an Secrets Manager secret for authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedauthconfiguration.html#cfn-bedrock-knowledgebase-redshiftprovisionedauthconfiguration-usernamepasswordsecretarn
         */
        readonly usernamePasswordSecretArn?: string;
    }
    /**
     * Contains configurations for query generation.
     *
     * For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide..
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationconfiguration.html
     */
    interface QueryGenerationConfigurationProperty {
        /**
         * The time after which query generation will time out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationconfiguration.html#cfn-bedrock-knowledgebase-querygenerationconfiguration-executiontimeoutseconds
         */
        readonly executionTimeoutSeconds?: number;
        /**
         * Specifies configurations for context to use during query generation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationconfiguration.html#cfn-bedrock-knowledgebase-querygenerationconfiguration-generationcontext
         */
        readonly generationContext?: cdk.IResolvable | CfnKnowledgeBase.QueryGenerationContextProperty;
    }
    /**
     * >Contains configurations for context to use during query generation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcontext.html
     */
    interface QueryGenerationContextProperty {
        /**
         * An array of objects, each of which defines information about example queries to help the query engine generate appropriate SQL queries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcontext.html#cfn-bedrock-knowledgebase-querygenerationcontext-curatedqueries
         */
        readonly curatedQueries?: Array<CfnKnowledgeBase.CuratedQueryProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An array of objects, each of which defines information about a table in the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcontext.html#cfn-bedrock-knowledgebase-querygenerationcontext-tables
         */
        readonly tables?: Array<cdk.IResolvable | CfnKnowledgeBase.QueryGenerationTableProperty> | cdk.IResolvable;
    }
    /**
     * Contains information about a table for the query engine to consider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationtable.html
     */
    interface QueryGenerationTableProperty {
        /**
         * An array of objects, each of which defines information about a column in the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationtable.html#cfn-bedrock-knowledgebase-querygenerationtable-columns
         */
        readonly columns?: Array<cdk.IResolvable | CfnKnowledgeBase.QueryGenerationColumnProperty> | cdk.IResolvable;
        /**
         * A description of the table that helps the query engine understand the contents of the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationtable.html#cfn-bedrock-knowledgebase-querygenerationtable-description
         */
        readonly description?: string;
        /**
         * Specifies whether to include or exclude the table during query generation.
         *
         * If you specify `EXCLUDE` , the table will be ignored. If you specify `INCLUDE` , all other tables will be ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationtable.html#cfn-bedrock-knowledgebase-querygenerationtable-inclusion
         */
        readonly inclusion?: string;
        /**
         * The name of the table for which the other fields in this object apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationtable.html#cfn-bedrock-knowledgebase-querygenerationtable-name
         */
        readonly name: string;
    }
    /**
     * Contains information about a column in the current table for the query engine to consider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcolumn.html
     */
    interface QueryGenerationColumnProperty {
        /**
         * A description of the column that helps the query engine understand the contents of the column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcolumn.html#cfn-bedrock-knowledgebase-querygenerationcolumn-description
         */
        readonly description?: string;
        /**
         * Specifies whether to include or exclude the column during query generation.
         *
         * If you specify `EXCLUDE` , the column will be ignored. If you specify `INCLUDE` , all other columns in the table will be ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcolumn.html#cfn-bedrock-knowledgebase-querygenerationcolumn-inclusion
         */
        readonly inclusion?: string;
        /**
         * The name of the column for which the other fields in this object apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcolumn.html#cfn-bedrock-knowledgebase-querygenerationcolumn-name
         */
        readonly name?: string;
    }
    /**
     * Contains configurations for a query, each of which defines information about example queries to help the query engine generate appropriate SQL queries.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-curatedquery.html
     */
    interface CuratedQueryProperty {
        /**
         * An example natural language query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-curatedquery.html#cfn-bedrock-knowledgebase-curatedquery-naturallanguage
         */
        readonly naturalLanguage: string;
        /**
         * The SQL equivalent of the natural language query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-curatedquery.html#cfn-bedrock-knowledgebase-curatedquery-sql
         */
        readonly sql: string;
    }
    /**
     * Contains the storage configuration of the knowledge base.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html
     */
    interface StorageConfigurationProperty {
        /**
         * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-opensearchserverlessconfiguration
         */
        readonly opensearchServerlessConfiguration?: cdk.IResolvable | CfnKnowledgeBase.OpenSearchServerlessConfigurationProperty;
        /**
         * Contains the storage configuration of the knowledge base in Pinecone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-pineconeconfiguration
         */
        readonly pineconeConfiguration?: cdk.IResolvable | CfnKnowledgeBase.PineconeConfigurationProperty;
        /**
         * Contains details about the storage configuration of the knowledge base in Amazon RDS.
         *
         * For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-rdsconfiguration
         */
        readonly rdsConfiguration?: cdk.IResolvable | CfnKnowledgeBase.RdsConfigurationProperty;
        /**
         * The vector store service in which the knowledge base is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html#cfn-bedrock-knowledgebase-storageconfiguration-type
         */
        readonly type: string;
    }
    /**
     * Contains details about the storage configuration of the knowledge base in Amazon OpenSearch Service.
     *
     * For more information, see [Create a vector index in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html
     */
    interface OpenSearchServerlessConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the OpenSearch Service vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-collectionarn
         */
        readonly collectionArn: string;
        /**
         * Contains the names of the fields to which to map information about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-fieldmapping
         */
        readonly fieldMapping: cdk.IResolvable | CfnKnowledgeBase.OpenSearchServerlessFieldMappingProperty;
        /**
         * The name of the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-vectorindexname
         */
        readonly vectorIndexName: string;
    }
    /**
     * Contains the names of the fields to which to map information about the vector store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html
     */
    interface OpenSearchServerlessFieldMappingProperty {
        /**
         * The name of the field in which Amazon Bedrock stores metadata about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-metadatafield
         */
        readonly metadataField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the raw text from your data.
         *
         * The text is split according to the chunking strategy you choose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-textfield
         */
        readonly textField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-vectorfield
         */
        readonly vectorField: string;
    }
    /**
     * Contains details about the storage configuration of the knowledge base in Pinecone.
     *
     * For more information, see [Create a vector index in Pinecone](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html
     */
    interface PineconeConfigurationProperty {
        /**
         * The endpoint URL for your index management page.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-connectionstring
         */
        readonly connectionString: string;
        /**
         * The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * Contains the names of the fields to which to map information about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-fieldmapping
         */
        readonly fieldMapping: cdk.IResolvable | CfnKnowledgeBase.PineconeFieldMappingProperty;
        /**
         * The namespace to be used to write new data to your database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html#cfn-bedrock-knowledgebase-pineconeconfiguration-namespace
         */
        readonly namespace?: string;
    }
    /**
     * Contains the names of the fields to which to map information about the vector store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html
     */
    interface PineconeFieldMappingProperty {
        /**
         * The name of the field in which Amazon Bedrock stores metadata about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html#cfn-bedrock-knowledgebase-pineconefieldmapping-metadatafield
         */
        readonly metadataField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the raw text from your data.
         *
         * The text is split according to the chunking strategy you choose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html#cfn-bedrock-knowledgebase-pineconefieldmapping-textfield
         */
        readonly textField: string;
    }
    /**
     * Contains details about the storage configuration of the knowledge base in Amazon RDS.
     *
     * For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html
     */
    interface RdsConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-credentialssecretarn
         */
        readonly credentialsSecretArn: string;
        /**
         * The name of your Amazon RDS database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-databasename
         */
        readonly databaseName: string;
        /**
         * Contains the names of the fields to which to map information about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-fieldmapping
         */
        readonly fieldMapping: cdk.IResolvable | CfnKnowledgeBase.RdsFieldMappingProperty;
        /**
         * The Amazon Resource Name (ARN) of the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-resourcearn
         */
        readonly resourceArn: string;
        /**
         * The name of the table in the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html#cfn-bedrock-knowledgebase-rdsconfiguration-tablename
         */
        readonly tableName: string;
    }
    /**
     * Contains the names of the fields to which to map information about the vector store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html
     */
    interface RdsFieldMappingProperty {
        /**
         * The name of the field in which Amazon Bedrock stores metadata about the vector store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-metadatafield
         */
        readonly metadataField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the ID for each entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-primarykeyfield
         */
        readonly primaryKeyField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the raw text from your data.
         *
         * The text is split according to the chunking strategy you choose.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-textfield
         */
        readonly textField: string;
        /**
         * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html#cfn-bedrock-knowledgebase-rdsfieldmapping-vectorfield
         */
        readonly vectorField: string;
    }
}
/**
 * Properties for defining a `CfnKnowledgeBase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html
 */
export interface CfnKnowledgeBaseProps {
    /**
     * The description of the knowledge base associated with the inline agent.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-description
     */
    readonly description?: string;
    /**
     * Contains details about the embeddings configuration of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration
     */
    readonly knowledgeBaseConfiguration: cdk.IResolvable | CfnKnowledgeBase.KnowledgeBaseConfigurationProperty;
    /**
     * The name of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rolearn
     */
    readonly roleArn: string;
    /**
     * Contains details about the storage configuration of the knowledge base.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration
     */
    readonly storageConfiguration?: cdk.IResolvable | CfnKnowledgeBase.StorageConfigurationProperty;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Creates a prompt in your prompt library that you can add to a flow.
 *
 * For more information, see [Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html) , [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) and [Prompt flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html) in the Amazon Bedrock User Guide.
 *
 * @cloudformationResource AWS::Bedrock::Prompt
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html
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
     * The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time at which the prompt was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The unique identifier of the prompt.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The time at which the prompt was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The version of the prompt that this summary applies to.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.
     */
    customerEncryptionKeyArn?: string;
    /**
     * The name of the default variant for the prompt.
     */
    defaultVariant?: string;
    /**
     * The description of the prompt.
     */
    description?: string;
    /**
     * The name of the prompt.
     */
    name: string;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     */
    tags?: Record<string, string>;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     */
    variants?: Array<cdk.IResolvable | CfnPrompt.PromptVariantProperty> | cdk.IResolvable;
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
export declare namespace CfnPrompt {
    /**
     * Contains details about a variant of the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html
     */
    interface PromptVariantProperty {
        /**
         * Contains model-specific inference configurations that aren't in the `inferenceConfiguration` field.
         *
         * To see model-specific inference parameters, see [Inference request parameters and response fields for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-additionalmodelrequestfields
         */
        readonly additionalModelRequestFields?: any | cdk.IResolvable;
        /**
         * Specifies a generative AI resource with which to use the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-genairesource
         */
        readonly genAiResource?: cdk.IResolvable | CfnPrompt.PromptGenAiResourceProperty;
        /**
         * Contains inference configurations for the prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-inferenceconfiguration
         */
        readonly inferenceConfiguration?: cdk.IResolvable | CfnPrompt.PromptInferenceConfigurationProperty;
        /**
         * An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-metadata
         */
        readonly metadata?: Array<cdk.IResolvable | CfnPrompt.PromptMetadataEntryProperty> | cdk.IResolvable;
        /**
         * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) with which to run inference on the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-modelid
         */
        readonly modelId?: string;
        /**
         * The name of the prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-name
         */
        readonly name: string;
        /**
         * Contains configurations for the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-templateconfiguration
         */
        readonly templateConfiguration: cdk.IResolvable | CfnPrompt.PromptTemplateConfigurationProperty;
        /**
         * The type of prompt template to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html#cfn-bedrock-prompt-promptvariant-templatetype
         */
        readonly templateType: string;
    }
    /**
     * Contains the message for a prompt.
     *
     * For more information, see [Construct and store reusable prompts with Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplateconfiguration.html
     */
    interface PromptTemplateConfigurationProperty {
        /**
         * Contains configurations to use the prompt in a conversational format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplateconfiguration.html#cfn-bedrock-prompt-prompttemplateconfiguration-chat
         */
        readonly chat?: CfnPrompt.ChatPromptTemplateConfigurationProperty | cdk.IResolvable;
        /**
         * Contains configurations for the text in a message for a prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplateconfiguration.html#cfn-bedrock-prompt-prompttemplateconfiguration-text
         */
        readonly text?: cdk.IResolvable | CfnPrompt.TextPromptTemplateConfigurationProperty;
    }
    /**
     * Contains configurations for a text prompt template.
     *
     * To include a variable, enclose a word in double curly braces as in `{{variable}}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-textprompttemplateconfiguration.html
     */
    interface TextPromptTemplateConfigurationProperty {
        /**
         * A cache checkpoint within a template configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-textprompttemplateconfiguration.html#cfn-bedrock-prompt-textprompttemplateconfiguration-cachepoint
         */
        readonly cachePoint?: CfnPrompt.CachePointBlockProperty | cdk.IResolvable;
        /**
         * An array of the variables in the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-textprompttemplateconfiguration.html#cfn-bedrock-prompt-textprompttemplateconfiguration-inputvariables
         */
        readonly inputVariables?: Array<cdk.IResolvable | CfnPrompt.PromptInputVariableProperty> | cdk.IResolvable;
        /**
         * The message for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-textprompttemplateconfiguration.html#cfn-bedrock-prompt-textprompttemplateconfiguration-text
         */
        readonly text?: string;
        /**
         * The Amazon S3 location of the prompt text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-textprompttemplateconfiguration.html#cfn-bedrock-prompt-textprompttemplateconfiguration-texts3location
         */
        readonly textS3Location?: cdk.IResolvable | CfnPrompt.TextS3LocationProperty;
    }
    /**
     * The Amazon S3 location of the prompt text.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-texts3location.html
     */
    interface TextS3LocationProperty {
        /**
         * The Amazon S3 bucket containing the prompt text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-texts3location.html#cfn-bedrock-prompt-texts3location-bucket
         */
        readonly bucket: string;
        /**
         * The object key for the Amazon S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-texts3location.html#cfn-bedrock-prompt-texts3location-key
         */
        readonly key: string;
        /**
         * The version of the Amazon S3 location to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-texts3location.html#cfn-bedrock-prompt-texts3location-version
         */
        readonly version?: string;
    }
    /**
     * Contains information about a variable in the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptinputvariable.html
     */
    interface PromptInputVariableProperty {
        /**
         * The name of the variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptinputvariable.html#cfn-bedrock-prompt-promptinputvariable-name
         */
        readonly name?: string;
    }
    /**
     * Indicates where a cache checkpoint is located.
     *
     * All information before this checkpoint is cached to be accessed on subsequent requests.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-cachepointblock.html
     */
    interface CachePointBlockProperty {
        /**
         * Indicates that the CachePointBlock is of the default type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-cachepointblock.html#cfn-bedrock-prompt-cachepointblock-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations to use a prompt in a conversational format.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html
     */
    interface ChatPromptTemplateConfigurationProperty {
        /**
         * An array of the variables in the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-inputvariables
         */
        readonly inputVariables?: Array<cdk.IResolvable | CfnPrompt.PromptInputVariableProperty> | cdk.IResolvable;
        /**
         * Contains messages in the chat for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-messages
         */
        readonly messages: Array<cdk.IResolvable | CfnPrompt.MessageProperty> | cdk.IResolvable;
        /**
         * Contains system prompts to provide context to the model or to describe how it should behave.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-system
         */
        readonly system?: Array<cdk.IResolvable | CfnPrompt.SystemContentBlockProperty> | cdk.IResolvable;
        /**
         * Configuration information for the tools that the model can use when generating a response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-toolconfiguration
         */
        readonly toolConfiguration?: cdk.IResolvable | CfnPrompt.ToolConfigurationProperty;
    }
    /**
     * A message input, or returned from, a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-message.html
     */
    interface MessageProperty {
        /**
         * The message content. Note the following restrictions:.
         *
         * - You can include up to 20 images. Each image's size, height, and width must be no more than 3.75 MB, 8000 px, and 8000 px, respectively.
         * - You can include up to five documents. Each document's size must be no more than 4.5 MB.
         * - If you include a `ContentBlock` with a `document` field in the array, you must also include a `ContentBlock` with a `text` field.
         * - You can only include images and documents if the `role` is `user` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-message.html#cfn-bedrock-prompt-message-content
         */
        readonly content: Array<CfnPrompt.ContentBlockProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The role that the message plays in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-message.html#cfn-bedrock-prompt-message-role
         */
        readonly role: string;
    }
    /**
     * A block of content for a message that you pass to, or receive from, a model with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) API operations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-contentblock.html
     */
    interface ContentBlockProperty {
        /**
         * Creates a cache checkpoint within a message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-contentblock.html#cfn-bedrock-prompt-contentblock-cachepoint
         */
        readonly cachePoint?: CfnPrompt.CachePointBlockProperty | cdk.IResolvable;
        /**
         * Text to include in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-contentblock.html#cfn-bedrock-prompt-contentblock-text
         */
        readonly text?: string;
    }
    /**
     * Contains configurations for instructions to provide the model for how to handle input.
     *
     * To learn more, see [Using the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-call.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-systemcontentblock.html
     */
    interface SystemContentBlockProperty {
        /**
         * Creates a cache checkpoint within a tool designation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-systemcontentblock.html#cfn-bedrock-prompt-systemcontentblock-cachepoint
         */
        readonly cachePoint?: CfnPrompt.CachePointBlockProperty | cdk.IResolvable;
        /**
         * A system prompt for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-systemcontentblock.html#cfn-bedrock-prompt-systemcontentblock-text
         */
        readonly text?: string;
    }
    /**
     * Configuration information for the tools that you pass to a model.
     *
     * For more information, see [Tool use (function calling)](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolconfiguration.html
     */
    interface ToolConfigurationProperty {
        /**
         * If supported by model, forces the model to request a tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolconfiguration.html#cfn-bedrock-prompt-toolconfiguration-toolchoice
         */
        readonly toolChoice?: cdk.IResolvable | CfnPrompt.ToolChoiceProperty;
        /**
         * An array of tools that you want to pass to a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolconfiguration.html#cfn-bedrock-prompt-toolconfiguration-tools
         */
        readonly tools: Array<cdk.IResolvable | CfnPrompt.ToolProperty> | cdk.IResolvable;
    }
    /**
     * Information about a tool that you can use with the Converse API.
     *
     * For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-tool.html
     */
    interface ToolProperty {
        /**
         * Creates a cache checkpoint within a tool designation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-tool.html#cfn-bedrock-prompt-tool-cachepoint
         */
        readonly cachePoint?: CfnPrompt.CachePointBlockProperty | cdk.IResolvable;
        /**
         * The specfication for the tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-tool.html#cfn-bedrock-prompt-tool-toolspec
         */
        readonly toolSpec?: cdk.IResolvable | CfnPrompt.ToolSpecificationProperty;
    }
    /**
     * The specification for the tool.
     *
     * For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolspecification.html
     */
    interface ToolSpecificationProperty {
        /**
         * The description for the tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolspecification.html#cfn-bedrock-prompt-toolspecification-description
         */
        readonly description?: string;
        /**
         * The input schema for the tool in JSON format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolspecification.html#cfn-bedrock-prompt-toolspecification-inputschema
         */
        readonly inputSchema: cdk.IResolvable | CfnPrompt.ToolInputSchemaProperty;
        /**
         * The name for the tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolspecification.html#cfn-bedrock-prompt-toolspecification-name
         */
        readonly name: string;
    }
    /**
     * The schema for the tool.
     *
     * The top level schema type must be `object` . For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolinputschema.html
     */
    interface ToolInputSchemaProperty {
        /**
         * The JSON schema for the tool.
         *
         * For more information, see [JSON Schema Reference](https://docs.aws.amazon.com/https://json-schema.org/understanding-json-schema/reference) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolinputschema.html#cfn-bedrock-prompt-toolinputschema-json
         */
        readonly json: any | cdk.IResolvable;
    }
    /**
     * Determines which tools the model should request in a call to `Converse` or `ConverseStream` .
     *
     * `ToolChoice` is only supported by Anthropic Claude 3 models and by Mistral AI Mistral Large. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolchoice.html
     */
    interface ToolChoiceProperty {
        /**
         * The model must request at least one tool (no text is generated).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolchoice.html#cfn-bedrock-prompt-toolchoice-any
         */
        readonly any?: any | cdk.IResolvable;
        /**
         * (Default).
         *
         * The Model automatically decides if a tool should be called or whether to generate text instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolchoice.html#cfn-bedrock-prompt-toolchoice-auto
         */
        readonly auto?: any | cdk.IResolvable;
        /**
         * The Model must request the specified tool.
         *
         * Only supported by Anthropic Claude 3 models.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolchoice.html#cfn-bedrock-prompt-toolchoice-tool
         */
        readonly tool?: cdk.IResolvable | CfnPrompt.SpecificToolChoiceProperty;
    }
    /**
     * The model must request a specific tool.
     *
     * For example, `{"tool" : {"name" : "Your tool name"}}` . For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide
     *
     * > This field is only supported by Anthropic Claude 3 models.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-specifictoolchoice.html
     */
    interface SpecificToolChoiceProperty {
        /**
         * The name of the tool that the model must request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-specifictoolchoice.html#cfn-bedrock-prompt-specifictoolchoice-name
         */
        readonly name: string;
    }
    /**
     * Contains inference configurations for the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptinferenceconfiguration.html
     */
    interface PromptInferenceConfigurationProperty {
        /**
         * Contains inference configurations for a text prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptinferenceconfiguration.html#cfn-bedrock-prompt-promptinferenceconfiguration-text
         */
        readonly text: cdk.IResolvable | CfnPrompt.PromptModelInferenceConfigurationProperty;
    }
    /**
     * Contains inference configurations related to model inference for a prompt.
     *
     * For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html
     */
    interface PromptModelInferenceConfigurationProperty {
        /**
         * The maximum number of tokens to return in the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-maxtokens
         */
        readonly maxTokens?: number;
        /**
         * A list of strings that define sequences after which the model will stop generating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-stopsequences
         */
        readonly stopSequences?: Array<string>;
        /**
         * Controls the randomness of the response.
         *
         * Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-temperature
         */
        readonly temperature?: number;
        /**
         * The percentage of most-likely candidates that the model considers for the next token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-topp
         */
        readonly topP?: number;
    }
    /**
     * Contains specifications for a generative AI resource with which to use the prompt.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptgenairesource.html
     */
    interface PromptGenAiResourceProperty {
        /**
         * Specifies an Amazon Bedrock agent with which to use the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptgenairesource.html#cfn-bedrock-prompt-promptgenairesource-agent
         */
        readonly agent: cdk.IResolvable | CfnPrompt.PromptAgentResourceProperty;
    }
    /**
     * Contains specifications for an Amazon Bedrock agent with which to use the prompt.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) and [Automate tasks in your application using conversational agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptagentresource.html
     */
    interface PromptAgentResourceProperty {
        /**
         * The ARN of the agent with which to use the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptagentresource.html#cfn-bedrock-prompt-promptagentresource-agentidentifier
         */
        readonly agentIdentifier: string;
    }
    /**
     * Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmetadataentry.html
     */
    interface PromptMetadataEntryProperty {
        /**
         * The key of a metadata tag for a prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmetadataentry.html#cfn-bedrock-prompt-promptmetadataentry-key
         */
        readonly key: string;
        /**
         * The value of a metadata tag for a prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmetadataentry.html#cfn-bedrock-prompt-promptmetadataentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnPrompt`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html
 */
export interface CfnPromptProps {
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-customerencryptionkeyarn
     */
    readonly customerEncryptionKeyArn?: string;
    /**
     * The name of the default variant for the prompt.
     *
     * This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-defaultvariant
     */
    readonly defaultVariant?: string;
    /**
     * The description of the prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-description
     */
    readonly description?: string;
    /**
     * The name of the prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-name
     */
    readonly name: string;
    /**
     * Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:.
     *
     * - [Tag naming limits and requirements](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions)
     * - [Tagging best practices](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-best-practices)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-variants
     */
    readonly variants?: Array<cdk.IResolvable | CfnPrompt.PromptVariantProperty> | cdk.IResolvable;
}
/**
 * Creates a static snapshot of your prompt that can be deployed to production.
 *
 * For more information, see [Deploy prompts using Prompt management by creating versions](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-deploy.html) in the Amazon Bedrock User Guide.
 *
 * @cloudformationResource AWS::Bedrock::PromptVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html
 */
export declare class CfnPromptVersion extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPromptVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPromptVersion;
    /**
     * The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time at which the prompt was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that the prompt version is encrypted with.
     *
     * @cloudformationAttribute CustomerEncryptionKeyArn
     */
    readonly attrCustomerEncryptionKeyArn: string;
    /**
     * The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
     *
     * @cloudformationAttribute DefaultVariant
     */
    readonly attrDefaultVariant: string;
    /**
     * The name of the prompt.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The unique identifier of the prompt.
     *
     * @cloudformationAttribute PromptId
     */
    readonly attrPromptId: string;
    /**
     * The time at which the prompt was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * A list of objects, each containing details about a variant of the prompt.
     *
     * @cloudformationAttribute Variants
     */
    readonly attrVariants: cdk.IResolvable;
    /**
     * The version of the prompt that this summary applies to.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the prompt version.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the version of the prompt.
     */
    promptArn: string;
    /**
     * A map of tags attached to the prompt version and their values.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPromptVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPromptVersion {
    /**
     * Contains details about a variant of the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html
     */
    interface PromptVariantProperty {
        /**
         * Contains model-specific inference configurations that aren't in the `inferenceConfiguration` field.
         *
         * To see model-specific inference parameters, see [Inference request parameters and response fields for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-additionalmodelrequestfields
         */
        readonly additionalModelRequestFields?: any | cdk.IResolvable;
        /**
         * Specifies a generative AI resource with which to use the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-genairesource
         */
        readonly genAiResource?: cdk.IResolvable | CfnPromptVersion.PromptGenAiResourceProperty;
        /**
         * Contains inference configurations for the prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-inferenceconfiguration
         */
        readonly inferenceConfiguration?: cdk.IResolvable | CfnPromptVersion.PromptInferenceConfigurationProperty;
        /**
         * An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-metadata
         */
        readonly metadata?: Array<cdk.IResolvable | CfnPromptVersion.PromptMetadataEntryProperty> | cdk.IResolvable;
        /**
         * The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) with which to run inference on the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-modelid
         */
        readonly modelId?: string;
        /**
         * The name of the prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-name
         */
        readonly name: string;
        /**
         * Contains configurations for the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-templateconfiguration
         */
        readonly templateConfiguration: cdk.IResolvable | CfnPromptVersion.PromptTemplateConfigurationProperty;
        /**
         * The type of prompt template to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html#cfn-bedrock-promptversion-promptvariant-templatetype
         */
        readonly templateType: string;
    }
    /**
     * Contains the message for a prompt.
     *
     * For more information, see [Construct and store reusable prompts with Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplateconfiguration.html
     */
    interface PromptTemplateConfigurationProperty {
        /**
         * Contains configurations to use the prompt in a conversational format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplateconfiguration.html#cfn-bedrock-promptversion-prompttemplateconfiguration-chat
         */
        readonly chat?: CfnPromptVersion.ChatPromptTemplateConfigurationProperty | cdk.IResolvable;
        /**
         * Contains configurations for the text in a message for a prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplateconfiguration.html#cfn-bedrock-promptversion-prompttemplateconfiguration-text
         */
        readonly text?: cdk.IResolvable | CfnPromptVersion.TextPromptTemplateConfigurationProperty;
    }
    /**
     * Contains configurations for a text prompt template.
     *
     * To include a variable, enclose a word in double curly braces as in `{{variable}}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-textprompttemplateconfiguration.html
     */
    interface TextPromptTemplateConfigurationProperty {
        /**
         * A cache checkpoint within a template configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-textprompttemplateconfiguration.html#cfn-bedrock-promptversion-textprompttemplateconfiguration-cachepoint
         */
        readonly cachePoint?: CfnPromptVersion.CachePointBlockProperty | cdk.IResolvable;
        /**
         * An array of the variables in the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-textprompttemplateconfiguration.html#cfn-bedrock-promptversion-textprompttemplateconfiguration-inputvariables
         */
        readonly inputVariables?: Array<cdk.IResolvable | CfnPromptVersion.PromptInputVariableProperty> | cdk.IResolvable;
        /**
         * The message for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-textprompttemplateconfiguration.html#cfn-bedrock-promptversion-textprompttemplateconfiguration-text
         */
        readonly text: string;
    }
    /**
     * Contains information about a variable in the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptinputvariable.html
     */
    interface PromptInputVariableProperty {
        /**
         * The name of the variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptinputvariable.html#cfn-bedrock-promptversion-promptinputvariable-name
         */
        readonly name?: string;
    }
    /**
     * Indicates where a cache checkpoint is located.
     *
     * All information before this checkpoint is cached to be accessed on subsequent requests.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-cachepointblock.html
     */
    interface CachePointBlockProperty {
        /**
         * Indicates that the CachePointBlock is of the default type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-cachepointblock.html#cfn-bedrock-promptversion-cachepointblock-type
         */
        readonly type: string;
    }
    /**
     * Contains configurations to use a prompt in a conversational format.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-chatprompttemplateconfiguration.html
     */
    interface ChatPromptTemplateConfigurationProperty {
        /**
         * An array of the variables in the prompt template.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-chatprompttemplateconfiguration.html#cfn-bedrock-promptversion-chatprompttemplateconfiguration-inputvariables
         */
        readonly inputVariables?: Array<cdk.IResolvable | CfnPromptVersion.PromptInputVariableProperty> | cdk.IResolvable;
        /**
         * Contains messages in the chat for the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-chatprompttemplateconfiguration.html#cfn-bedrock-promptversion-chatprompttemplateconfiguration-messages
         */
        readonly messages: Array<cdk.IResolvable | CfnPromptVersion.MessageProperty> | cdk.IResolvable;
        /**
         * Contains system prompts to provide context to the model or to describe how it should behave.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-chatprompttemplateconfiguration.html#cfn-bedrock-promptversion-chatprompttemplateconfiguration-system
         */
        readonly system?: Array<cdk.IResolvable | CfnPromptVersion.SystemContentBlockProperty> | cdk.IResolvable;
        /**
         * Configuration information for the tools that the model can use when generating a response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-chatprompttemplateconfiguration.html#cfn-bedrock-promptversion-chatprompttemplateconfiguration-toolconfiguration
         */
        readonly toolConfiguration?: cdk.IResolvable | CfnPromptVersion.ToolConfigurationProperty;
    }
    /**
     * A message input, or returned from, a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-message.html
     */
    interface MessageProperty {
        /**
         * The message content. Note the following restrictions:.
         *
         * - You can include up to 20 images. Each image's size, height, and width must be no more than 3.75 MB, 8000 px, and 8000 px, respectively.
         * - You can include up to five documents. Each document's size must be no more than 4.5 MB.
         * - If you include a `ContentBlock` with a `document` field in the array, you must also include a `ContentBlock` with a `text` field.
         * - You can only include images and documents if the `role` is `user` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-message.html#cfn-bedrock-promptversion-message-content
         */
        readonly content: Array<CfnPromptVersion.ContentBlockProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The role that the message plays in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-message.html#cfn-bedrock-promptversion-message-role
         */
        readonly role: string;
    }
    /**
     * A block of content for a message that you pass to, or receive from, a model with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) API operations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-contentblock.html
     */
    interface ContentBlockProperty {
        /**
         * Creates a cache checkpoint within a message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-contentblock.html#cfn-bedrock-promptversion-contentblock-cachepoint
         */
        readonly cachePoint?: CfnPromptVersion.CachePointBlockProperty | cdk.IResolvable;
        /**
         * Text to include in the message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-contentblock.html#cfn-bedrock-promptversion-contentblock-text
         */
        readonly text?: string;
    }
    /**
     * Contains configurations for instructions to provide the model for how to handle input.
     *
     * To learn more, see [Using the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-call.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-systemcontentblock.html
     */
    interface SystemContentBlockProperty {
        /**
         * Creates a cache checkpoint within a tool designation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-systemcontentblock.html#cfn-bedrock-promptversion-systemcontentblock-cachepoint
         */
        readonly cachePoint?: CfnPromptVersion.CachePointBlockProperty | cdk.IResolvable;
        /**
         * A system prompt for the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-systemcontentblock.html#cfn-bedrock-promptversion-systemcontentblock-text
         */
        readonly text?: string;
    }
    /**
     * Configuration information for the tools that you pass to a model.
     *
     * For more information, see [Tool use (function calling)](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolconfiguration.html
     */
    interface ToolConfigurationProperty {
        /**
         * If supported by model, forces the model to request a tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolconfiguration.html#cfn-bedrock-promptversion-toolconfiguration-toolchoice
         */
        readonly toolChoice?: cdk.IResolvable | CfnPromptVersion.ToolChoiceProperty;
        /**
         * An array of tools that you want to pass to a model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolconfiguration.html#cfn-bedrock-promptversion-toolconfiguration-tools
         */
        readonly tools: Array<cdk.IResolvable | CfnPromptVersion.ToolProperty> | cdk.IResolvable;
    }
    /**
     * Information about a tool that you can use with the Converse API.
     *
     * For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-tool.html
     */
    interface ToolProperty {
        /**
         * Creates a cache checkpoint within a tool designation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-tool.html#cfn-bedrock-promptversion-tool-cachepoint
         */
        readonly cachePoint?: CfnPromptVersion.CachePointBlockProperty | cdk.IResolvable;
        /**
         * The specfication for the tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-tool.html#cfn-bedrock-promptversion-tool-toolspec
         */
        readonly toolSpec?: cdk.IResolvable | CfnPromptVersion.ToolSpecificationProperty;
    }
    /**
     * The specification for the tool.
     *
     * For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolspecification.html
     */
    interface ToolSpecificationProperty {
        /**
         * The description for the tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolspecification.html#cfn-bedrock-promptversion-toolspecification-description
         */
        readonly description?: string;
        /**
         * The input schema for the tool in JSON format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolspecification.html#cfn-bedrock-promptversion-toolspecification-inputschema
         */
        readonly inputSchema: cdk.IResolvable | CfnPromptVersion.ToolInputSchemaProperty;
        /**
         * The name for the tool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolspecification.html#cfn-bedrock-promptversion-toolspecification-name
         */
        readonly name: string;
    }
    /**
     * The schema for the tool.
     *
     * The top level schema type must be `object` . For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolinputschema.html
     */
    interface ToolInputSchemaProperty {
        /**
         * The JSON schema for the tool.
         *
         * For more information, see [JSON Schema Reference](https://docs.aws.amazon.com/https://json-schema.org/understanding-json-schema/reference) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolinputschema.html#cfn-bedrock-promptversion-toolinputschema-json
         */
        readonly json: any | cdk.IResolvable;
    }
    /**
     * Determines which tools the model should request in a call to `Converse` or `ConverseStream` .
     *
     * `ToolChoice` is only supported by Anthropic Claude 3 models and by Mistral AI Mistral Large. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolchoice.html
     */
    interface ToolChoiceProperty {
        /**
         * The model must request at least one tool (no text is generated).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolchoice.html#cfn-bedrock-promptversion-toolchoice-any
         */
        readonly any?: any | cdk.IResolvable;
        /**
         * (Default).
         *
         * The Model automatically decides if a tool should be called or whether to generate text instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolchoice.html#cfn-bedrock-promptversion-toolchoice-auto
         */
        readonly auto?: any | cdk.IResolvable;
        /**
         * The Model must request the specified tool.
         *
         * Only supported by Anthropic Claude 3 models.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolchoice.html#cfn-bedrock-promptversion-toolchoice-tool
         */
        readonly tool?: cdk.IResolvable | CfnPromptVersion.SpecificToolChoiceProperty;
    }
    /**
     * The model must request a specific tool.
     *
     * For example, `{"tool" : {"name" : "Your tool name"}}` . For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide
     *
     * > This field is only supported by Anthropic Claude 3 models.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-specifictoolchoice.html
     */
    interface SpecificToolChoiceProperty {
        /**
         * The name of the tool that the model must request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-specifictoolchoice.html#cfn-bedrock-promptversion-specifictoolchoice-name
         */
        readonly name: string;
    }
    /**
     * Contains inference configurations for the prompt.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptinferenceconfiguration.html
     */
    interface PromptInferenceConfigurationProperty {
        /**
         * Contains inference configurations for a text prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptinferenceconfiguration.html#cfn-bedrock-promptversion-promptinferenceconfiguration-text
         */
        readonly text: cdk.IResolvable | CfnPromptVersion.PromptModelInferenceConfigurationProperty;
    }
    /**
     * Contains inference configurations related to model inference for a prompt.
     *
     * For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmodelinferenceconfiguration.html
     */
    interface PromptModelInferenceConfigurationProperty {
        /**
         * The maximum number of tokens to return in the response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmodelinferenceconfiguration.html#cfn-bedrock-promptversion-promptmodelinferenceconfiguration-maxtokens
         */
        readonly maxTokens?: number;
        /**
         * A list of strings that define sequences after which the model will stop generating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmodelinferenceconfiguration.html#cfn-bedrock-promptversion-promptmodelinferenceconfiguration-stopsequences
         */
        readonly stopSequences?: Array<string>;
        /**
         * Controls the randomness of the response.
         *
         * Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmodelinferenceconfiguration.html#cfn-bedrock-promptversion-promptmodelinferenceconfiguration-temperature
         */
        readonly temperature?: number;
        /**
         * The percentage of most-likely candidates that the model considers for the next token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmodelinferenceconfiguration.html#cfn-bedrock-promptversion-promptmodelinferenceconfiguration-topp
         */
        readonly topP?: number;
    }
    /**
     * Contains specifications for a generative AI resource with which to use the prompt.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptgenairesource.html
     */
    interface PromptGenAiResourceProperty {
        /**
         * Specifies an Amazon Bedrock agent with which to use the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptgenairesource.html#cfn-bedrock-promptversion-promptgenairesource-agent
         */
        readonly agent: cdk.IResolvable | CfnPromptVersion.PromptAgentResourceProperty;
    }
    /**
     * Contains specifications for an Amazon Bedrock agent with which to use the prompt.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) and [Automate tasks in your application using conversational agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptagentresource.html
     */
    interface PromptAgentResourceProperty {
        /**
         * The ARN of the agent with which to use the prompt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptagentresource.html#cfn-bedrock-promptversion-promptagentresource-agentidentifier
         */
        readonly agentIdentifier: string;
    }
    /**
     * Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant.
     *
     * For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmetadataentry.html
     */
    interface PromptMetadataEntryProperty {
        /**
         * The key of a metadata tag for a prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmetadataentry.html#cfn-bedrock-promptversion-promptmetadataentry-key
         */
        readonly key: string;
        /**
         * The value of a metadata tag for a prompt variant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmetadataentry.html#cfn-bedrock-promptversion-promptmetadataentry-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnPromptVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html
 */
export interface CfnPromptVersionProps {
    /**
     * The description of the prompt version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html#cfn-bedrock-promptversion-description
     */
    readonly description?: string;
    /**
     * The Amazon Resource Name (ARN) of the version of the prompt.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html#cfn-bedrock-promptversion-promptarn
     */
    readonly promptArn: string;
    /**
     * A map of tags attached to the prompt version and their values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html#cfn-bedrock-promptversion-tags
     */
    readonly tags?: Record<string, string>;
}
