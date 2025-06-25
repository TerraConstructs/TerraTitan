/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentAgentKnowledgeBaseAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}
    */
    readonly agentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}
    */
    readonly knowledgeBaseState: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#timeouts BedrockagentAgentKnowledgeBaseAssociation#timeouts}
    */
    readonly timeouts?: BedrockagentAgentKnowledgeBaseAssociationTimeouts;
}
export interface BedrockagentAgentKnowledgeBaseAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#create BedrockagentAgentKnowledgeBaseAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#update BedrockagentAgentKnowledgeBaseAssociation#update}
    */
    readonly update?: string;
}
export declare function bedrockagentAgentKnowledgeBaseAssociationTimeoutsToTerraform(struct?: BedrockagentAgentKnowledgeBaseAssociationTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentAgentKnowledgeBaseAssociationTimeoutsToHclTerraform(struct?: BedrockagentAgentKnowledgeBaseAssociationTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentAgentKnowledgeBaseAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentKnowledgeBaseAssociationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association aws_bedrockagent_agent_knowledge_base_association}
*/
export declare class BedrockagentAgentKnowledgeBaseAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_agent_knowledge_base_association";
    /**
    * Generates CDKTF code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentAgentKnowledgeBaseAssociation to import
    * @param importFromId The id of the existing BedrockagentAgentKnowledgeBaseAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentAgentKnowledgeBaseAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_knowledge_base_association aws_bedrockagent_agent_knowledge_base_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentAgentKnowledgeBaseAssociationConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentAgentKnowledgeBaseAssociationConfig);
    private _agentId?;
    get agentId(): string;
    set agentId(value: string);
    get agentIdInput(): string | undefined;
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    get id(): string;
    private _knowledgeBaseId?;
    get knowledgeBaseId(): string;
    set knowledgeBaseId(value: string);
    get knowledgeBaseIdInput(): string | undefined;
    private _knowledgeBaseState?;
    get knowledgeBaseState(): string;
    set knowledgeBaseState(value: string);
    get knowledgeBaseStateInput(): string | undefined;
    private _timeouts;
    get timeouts(): BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference;
    putTimeouts(value: BedrockagentAgentKnowledgeBaseAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentAgentKnowledgeBaseAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
