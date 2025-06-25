/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentAgentCollaboratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}
    */
    readonly agentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}
    */
    readonly collaborationInstruction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}
    */
    readonly collaboratorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}
    */
    readonly prepareAgent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}
    */
    readonly relayConversationHistory?: string;
    /**
    * agent_descriptor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}
    */
    readonly agentDescriptor?: BedrockagentAgentCollaboratorAgentDescriptor[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}
    */
    readonly timeouts?: BedrockagentAgentCollaboratorTimeouts;
}
export interface BedrockagentAgentCollaboratorAgentDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}
    */
    readonly aliasArn: string;
}
export declare function bedrockagentAgentCollaboratorAgentDescriptorToTerraform(struct?: BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable): any;
export declare function bedrockagentAgentCollaboratorAgentDescriptorToHclTerraform(struct?: BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable): any;
export declare class BedrockagentAgentCollaboratorAgentDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentCollaboratorAgentDescriptor | cdktf.IResolvable | undefined);
    private _aliasArn?;
    get aliasArn(): string;
    set aliasArn(value: string);
    get aliasArnInput(): string | undefined;
}
export declare class BedrockagentAgentCollaboratorAgentDescriptorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentCollaboratorAgentDescriptor[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentCollaboratorAgentDescriptorOutputReference;
}
export interface BedrockagentAgentCollaboratorTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}
    */
    readonly update?: string;
}
export declare function bedrockagentAgentCollaboratorTimeoutsToTerraform(struct?: BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentAgentCollaboratorTimeoutsToHclTerraform(struct?: BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentAgentCollaboratorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentCollaboratorTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator}
*/
export declare class BedrockagentAgentCollaborator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_agent_collaborator";
    /**
    * Generates CDKTF code for importing a BedrockagentAgentCollaborator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentAgentCollaborator to import
    * @param importFromId The id of the existing BedrockagentAgentCollaborator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentAgentCollaborator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentAgentCollaboratorConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentAgentCollaboratorConfig);
    private _agentId?;
    get agentId(): string;
    set agentId(value: string);
    get agentIdInput(): string | undefined;
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    private _collaborationInstruction?;
    get collaborationInstruction(): string;
    set collaborationInstruction(value: string);
    get collaborationInstructionInput(): string | undefined;
    get collaboratorId(): string;
    private _collaboratorName?;
    get collaboratorName(): string;
    set collaboratorName(value: string);
    get collaboratorNameInput(): string | undefined;
    get id(): string;
    private _prepareAgent?;
    get prepareAgent(): boolean | cdktf.IResolvable;
    set prepareAgent(value: boolean | cdktf.IResolvable);
    resetPrepareAgent(): void;
    get prepareAgentInput(): boolean | cdktf.IResolvable | undefined;
    private _relayConversationHistory?;
    get relayConversationHistory(): string;
    set relayConversationHistory(value: string);
    resetRelayConversationHistory(): void;
    get relayConversationHistoryInput(): string | undefined;
    private _agentDescriptor;
    get agentDescriptor(): BedrockagentAgentCollaboratorAgentDescriptorList;
    putAgentDescriptor(value: BedrockagentAgentCollaboratorAgentDescriptor[] | cdktf.IResolvable): void;
    resetAgentDescriptor(): void;
    get agentDescriptorInput(): cdktf.IResolvable | BedrockagentAgentCollaboratorAgentDescriptor[] | undefined;
    private _timeouts;
    get timeouts(): BedrockagentAgentCollaboratorTimeoutsOutputReference;
    putTimeouts(value: BedrockagentAgentCollaboratorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentAgentCollaboratorTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
